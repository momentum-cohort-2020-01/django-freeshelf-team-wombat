# Generated by Django 3.0.3 on 2020-02-28 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='website',
            field=models.TextField(blank=True, null=True),
        ),
    ]
