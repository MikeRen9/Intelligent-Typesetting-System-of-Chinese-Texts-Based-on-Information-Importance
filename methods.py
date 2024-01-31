import json
from flask import Flask, request
from flask_cors import CORS
from nlp import TestRank
app = Flask(__name__)
CORS(app)


"""
对全文进行关键词提取
"""
@app.route('/extractor', methods=['GET', 'POST'])
def extractor():

   text = request.args.get('text')
   top_n = 20
   LDA_num_topics = 5

   """
   TextRank
   """
   TextRankResult = dict(TestRank.TestRank_extractor(text.replace(" ", ""), top_n=top_n))
   # print("TextRank")
   # print(TestRank.TestRank_extractor(text, top_n=20))
   # print(dict(TestRank.TestRank_extractor(text, top_n=20)))

   results = {"TextRankResult": TextRankResult}

   # print(results)

   # return jsonify(results)
   return json.dumps(results, default=str, ensure_ascii=False)


"""
对每一段进行关键词提取
"""
@app.route('/extractor_v2_1', methods=['GET', 'POST'])
def extractor_v2_1():

   text = request.args.get('text')
   top_n = 20
   LDA_num_topics = 5

   # 对文本进行分段
   befor_text = text.split("\n")
   # 去除空白的段落
   after_text = []
   for temp_text in befor_text:
      if temp_text != '':
         after_text.append(temp_text)
   # print(after_text)

   """
   TextRank
   """
   TextRankResult = {}
   for index, temp_text in enumerate(after_text):
      TextRankResult["text_{}".format(str(index+1))] = dict(TestRank.TestRank_extractor(temp_text.replace(" ", ""), top_n=top_n))

   results = {"TextRankResult": TextRankResult}

   # print(results)

   return json.dumps(results, default=str, ensure_ascii=False)


if __name__ == '__main__':
   app.run()
