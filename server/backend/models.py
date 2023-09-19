from django.db import models
from django.contrib.auth.models import User as DjangoUser


class UserProfile(models.Model):
    user = models.OneToOneField(DjangoUser, on_delete=models.CASCADE)
    bio = models.CharField(max_length=160, blank=True)
    website = models.URLField(blank=True)
    location = models.CharField(max_length=200, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    profile_photo = models.ImageField(upload_to='profile_photos/', blank=True)
    cover_photo = models.ImageField(upload_to='cover_photos/', blank=True)


class Tweet(models.Model):
    user = models.ForeignKey(DjangoUser, on_delete=models.CASCADE)
    text = models.TextField(max_length=280)
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(
        DjangoUser, related_name='liked_tweets', blank=True)
    retweets = models.ManyToManyField(
        DjangoUser, related_name='retweeted_tweets', blank=True)
    parent_tweet = models.ForeignKey(
        'self', on_delete=models.SET_NULL, null=True, blank=True)


class Like(models.Model):
    user = models.ForeignKey(DjangoUser, on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE)


class Retweet(models.Model):
    user = models.ForeignKey(DjangoUser, on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE)


class Reply(models.Model):
    user = models.ForeignKey(DjangoUser, on_delete=models.CASCADE)
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE)
    text = models.TextField(max_length=280)


class Follow(models.Model):
    follower = models.ForeignKey(
        DjangoUser, on_delete=models.CASCADE, related_name='following')
    followed = models.ForeignKey(
        DjangoUser, on_delete=models.CASCADE, related_name='followers')


class Notification(models.Model):
    user = models.ForeignKey(DjangoUser, on_delete=models.CASCADE)
    tweet = models.ForeignKey(
        Tweet, on_delete=models.CASCADE, null=True, blank=True)
    sender = models.ForeignKey(
        DjangoUser, on_delete=models.CASCADE, related_name='sent_notifications')
    notification_type = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)


class Hashtag(models.Model):
    text = models.CharField(max_length=100)
    tweets = models.ManyToManyField(Tweet, related_name='hashtags')


class Media(models.Model):
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE)
    file = models.ImageField(upload_to='tweet_media/')


class Message(models.Model):
    sender = models.ForeignKey(
        DjangoUser, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(
        DjangoUser, on_delete=models.CASCADE, related_name='received_messages')
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
