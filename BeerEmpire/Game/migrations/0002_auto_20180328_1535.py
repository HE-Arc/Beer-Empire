# Generated by Django 2.0.1 on 2018-03-28 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Game', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='farm_hops',
            new_name='employee_hops',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='farm_malt',
            new_name='employee_idle',
        ),
        migrations.RenameField(
            model_name='profile',
            old_name='farm_yeast',
            new_name='employee_malt',
        ),
        migrations.AddField(
            model_name='profile',
            name='employee_yeast',
            field=models.IntegerField(default=0),
        ),
    ]