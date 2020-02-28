from django.db import models


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length= 500)
    author = models.CharField(max_length= 500)
    description = models.TextField(max_length=None)
    website = models.TextField(max_length=None, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Book title: {self.title} description: {self.description} website: {self.website}'
        pass
