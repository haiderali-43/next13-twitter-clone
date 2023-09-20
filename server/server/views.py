from django_nextjs.render import render_nextjs_page
from django.shortcuts import render


async def signup(request):
    return await render_nextjs_page(request)
