from operator import concat
from bs4 import BeautifulSoup
import requests

url_origin = "https://qz.com"

r = requests.get(concat(url_origin, "/africa/latest"))

soup = BeautifulSoup(r.text, 'html.parser')


class Notice(object):
    title = ""
    link = ""


def make_notice(title, link):
    notice = Notice()
    notice.title = title
    notice.link = link
    return notice


notices = []

for notice in soup.find_all("a", attrs={"class": "eBKpx"}):
    title = notice.find(
        "div", attrs={"class": "esSAQ _8S5gh"}).string
    link = concat(url_origin, notice.get('href'))
    notice_data = make_notice(title, link)
    notices.append(notice_data)

for notice in notices:
    print("Title:", notice.title)
    print("Link:", notice.link, "\n")
