# Generated by Django 5.0.2 on 2024-03-30 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0009_alter_carlisting_image_file_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carlisting',
            name='transmission',
            field=models.CharField(max_length=20),
        ),
    ]