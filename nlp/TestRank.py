"""
https://zhuanlan.zhihu.com/p/568271135
"""
import jieba.analyse


def TestRank_extractor(data, top_n):
    """
    jieba.analyse.textrank(sentence, topK=20, withWeight=False, allowPOS=())
    sentence参数 为待提取的文本，topK 为返回几个权重最大的关键词，默认值为 20，withWeight 为是否一并返回关键词权重值，默认值为 False，allowPOS 仅包括指定词性的词，默认值为空，即不筛选
    """
    return jieba.analyse.textrank(data, topK=top_n, withWeight=True, allowPOS=('ns', 'n', 'vn', 'v', 'nr', 'nt'))


# # 打开文本
# with open("../test_files/test3.txt", "r", encoding='utf-8') as f:
#     data = f.read()  # 读取文本
#     print(data)
#     print(TestRank_extractor(data, 20))
