from django.db import models
from django.utils.text import slugify



class Book(models.Model):
    title = models.CharField(max_length= 500)
    author = models.CharField(max_length= 500)
    description = models.TextField(max_length=None)
    url = models.URLField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    category = models.ForeignKey("Category", on_delete=models.DO_NOTHING, null=True, blank=True)

    def __str__(self):
        return f'Book title: {self.title} Author: {self.author} Description: {self.description} website: {self.url}'
       

class Category(models.Model):
    name = models.CharField(max_length=40)
    slug = models.SlugField(null=False, unique=True)

    def __str__(self):
        return f'{self.name}'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)