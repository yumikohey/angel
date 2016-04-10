from bs4 import BeautifulSoup
import requests
import urllib

#Get all nordstrom bags
import pandas as pd
import json
page = 1
product_brands = []
product_names = []
product_urls = []
product_image_urls = []
for page in xrange(1,40):
    url = requests.get('http://shop.nordstrom.com/c/womens-handbags?origin=leftnav&offset=1&page=%s' %(str(page)))
    if url.status_code == 200:
        soup = BeautifulSoup(url.content,'html.parser')
        rebecca_bags_json = soup.findAll('script')[9].contents[0].split('ProductResults,')[1].split('), document.getElementById')[0]
        j = json.loads(rebecca_bags_json)['data']['ProductResult']['Products']
        product_brands.extend([j[i]['Brand']['Label'] for i in xrange(len(j))])
        product_names.extend([j[i]['Title'] for i in xrange(len(j))])
        product_urls.extend([j[i]['ProductPageUrl'] for i in xrange(len(j))])
        product_image_urls.extend([j[i]['Media'][0]['Url'] for i in xrange(len(j))])
# for key,value in enumerate(product_image_urls):
#     if key%50 == 0:
#         print key
#     file_name = product_urls[key].split('/')[4] +'_'+str(key)+ '.jpg'
#     urllib.urlretrieve(value,file_name)

