import os
import sys

from celery import Celery
from celery.schedules import crontab

sys.path.append('/app/src')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings.settings')

app = Celery('tender_tracker')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.conf.beat_schedule = {
    'parse_and_send': {
        'task': 'server.apps.parser.tasks.send_parsing_task',
        'schedule': crontab(minute='00', hour='10'),
    },
    'clear_old_parse_date': {
        'task': 'server.apps.parser.tasks.clear_tender',
        'schedule': crontab(minute='00', hour='11'),
    },
}

app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
