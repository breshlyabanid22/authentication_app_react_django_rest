# Generated by Django 5.0.2 on 2024-04-06 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0011_rentalbooking'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rentalbooking',
            name='drop_contact',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='rentalbooking',
            name='pick_contact',
            field=models.PositiveIntegerField(),
        ),
    ]