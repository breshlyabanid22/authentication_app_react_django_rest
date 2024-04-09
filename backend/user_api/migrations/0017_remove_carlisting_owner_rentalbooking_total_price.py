# Generated by Django 5.0.2 on 2024-04-09 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0016_alter_carlisting_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='carlisting',
            name='owner',
        ),
        migrations.AddField(
            model_name='rentalbooking',
            name='total_price',
            field=models.IntegerField(default=0),
        ),
    ]
