# Generated by Django 3.0.3 on 2020-02-28 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_book_website'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='website',
            field=models.TextField(null=True),
        ),
    ]
