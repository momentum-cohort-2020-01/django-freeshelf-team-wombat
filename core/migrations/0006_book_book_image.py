# Generated by Django 3.0.3 on 2020-03-02 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20200229_2229'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='book_image',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
