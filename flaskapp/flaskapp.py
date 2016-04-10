from flask import Flask, request, render_template, jsonify
import json
import requests
import socket
import time
from datetime import datetime
import numpy as np 
# # from fuzzywuzzy import fuzz
# # from fuzzywuzzy import process
from MoviePosters import MoviePosters
import urllib
import scipy
import graphlab as gl 
import tempfile
import shutil
import pandas as pd

app = Flask(__name__)

user_names = ['Angela','Ali','Yumiko','Kenneth','Mia']
brands = ['MICHAEL_Michael_Kors','MICHAEL_Michael_Kors','kate_spade_new_york','REBECCA_MINKOFF','Chloe']
# feed_img_urls = ['flask_image/1.png','flask_image/2.png','flask_image/3.png','flask_image/4.png','flask_image/5.png']
feed_img_urls = ['http://s24.postimg.org/m17pnn5hf/image.png','http://s23.postimg.org/7xujipcbd/image.png','http://s24.postimg.org/pyuzd1sar/image.png','http://s24.postimg.org/g43u6tocj/image.png','http://s24.postimg.org/yxpn3tmkj/image.png']
prodcut_imgs = ['http://s21.postimg.org/gmyv94kn9/training_bagsromy_medium_leather_backpack30_S6_GRU.jpg','http://s16.postimg.org/i6kb9tso3/training_bagssloan_large_denim_chevron_shoulder.jpg','http://s28.postimg.org/7xcpzvlaj/kate_spade_new_york_small_cedar_street_harmony_t.jpg','http://s15.postimg.org/46odg4ell/rebecca_minkoff_love_crossbody_bag_262.jpg','http://s28.postimg.org/t2ff3e4qz/chloe_small_drew_leather_shoulder_bag_581.jpg']
MICHAEL_Michael_Kors = gl.load_model('sframe/test_mk_model') 
images = gl.load_model('sframe/test_mk')
kate_spade_new_york = gl.load_model('sframe/kate_spade_new_york_nearest_neighbor_model')
REBECCA_MINKOFF = gl.load_model('sframe/REBECCA_MINKOFF_nearest_neighbor_model')
Chloe = gl.load_model('sframe/Chloe_nearest_neighbor_model')
prices = [220,350,299,180,1500]
df = pd.DataFrame()
df['user_names'] = user_names
df['brands'] = brands
df['feed_img_urls'] = feed_img_urls
df['product_imgs'] = prodcut_imgs
df['prices'] = prices
df.to_json('user_data')


def similar_image(brand, feed_img, model = MICHAEL_Michael_Kors):
    dirpath = tempfile.mkdtemp()
    test_image = gl.image_analysis.load_images(dirpath)
    similar_images = model.query(feed_img, k = 5)
    image_list = similar_images['reference_label'][:5]
    for image_id in image_list:
        images[image_id]

@app.route('/')
def index():
    with open('user_data') as f:
        product = f.read()
    return jsonify(product)
    # return render_template('index.html')

# @app.route('/search', methods=['POST'])
# def searchMovie():
#     search_tuple = process.extract(request.get_data(), choices, limit=5)
#     result = [i[0] for i in search_tuple]
#     return result


if __name__ == '__main__':
    # Register for pinging service

    # Start Flask app
    app.run(debug=True)
