/* DeepNick 博客数据文件：由浏览器当前内容导出 */
window.DEEPNICK_DATA = {
  "competitions": [
    {
      "id": "c1788270222078",
      "platform": "牛客",
      "date": "2026.8.23",
      "title": "牛客周赛 Round 158",
      "desc": "",
      "problems": [
        {
          "letter": "A",
          "title": "小月的材料",
          "knowledge": "模拟",
          "body": "按照题意模拟",
          "code": "void solve(){   \n    int a,b,c;\n    cin>>a>>b>>c;\n    cout<<4*abs(a-b)+2*abs(b-c)+abs(c-a);\n}"
        },
        {
          "letter": "B",
          "title": "小月的点歌台",
          "knowledge": "字符串、模拟",
          "body": "按照题意模拟",
          "code": "void solve(){   \n    int n;\n    cin>>n;\n    string s;\n    cin>>s;\n    map<char,int> mp;\n    for(int i=0;i<n;i++){\n        mp[s[i]]++;\n        if(mp[s[i]]==3){\n            cout<<i+1;\n            return;\n        }\n    }\n    cout<<\"-1\"<<endl;  \n}"
        },
        {
          "letter": "C",
          "title": "小月的书架",
          "knowledge": "哈希表、模拟",
          "body": "因为数据过大，所以需要用map来存数据，然后模拟即可",
          "code": "void solve(){   \n    int n;\n    cin>>n;\n    vector<int> a(n+1);\n    map<int,vector<int>> g;\n    int ans=0;\n    for(int i=1;i<=n;i++){\n        cin>>a[i];\n        g[a[i]].push_back(i);\n    }\n    for(auto [x,y]:g){\n        if(y.size()==1) ans+=g[x][0];\n        else if(y.size()>=3 && (int)y.size()&1) ans+=g[x][((int)y.size()-1)/2];\n    }\n    cout<<ans;\n}"
        }
      ],
      "image": ""
    }
  ],
  "notes": [],
  "profile": {
    "name": "DeepNick",
    "handle": "算法竞赛 · C++ · 持续学习",
    "bio": "把问题想深，把解法写清。|记录竞赛，也记录思考。",
    "email": "deepnick@proton.me",
    "avatar": "",
    "cover": "",
    "stats": [
      "128",
      "42",
      "3"
    ]
  },
  "categories": [
    [
      "全部文章",
      "24"
    ],
    [
      "题解 / Solution",
      "18"
    ],
    [
      "算法笔记",
      "4"
    ],
    [
      "工程记录",
      "2"
    ]
  ],
  "platforms": [
    [
      "牛客",
      "nowcoder"
    ],
    [
      "AtCoder",
      "atcoder"
    ],
    [
      "Codeforces",
      "codeforces"
    ]
  ],
  "welcome": {
    "title": "你好，我是 DeepNick 👋",
    "body": "这里是我的算法实验记录本。你可以找到牛客、AtCoder、Codeforces 题解，也可以翻到一些不太严肃的技术笔记。"
  },
  "timeline": [],
  "about": {
    "title": "保持好奇，保持笨拙。",
    "body": "写题解不是为了证明做过，而是为了让未来的自己少走一点弯路。",
    "email": "deepnick@proton.me"
  },
  "footer": {
    "copy": "© 2024 DeepNick · Built with curiosity.",
    "github": "https://github.com"
  },
  "solutions": [
    {
      "platform": "牛客",
      "title": "啦啦啦",
      "desc": "重要的",
      "meta": "2026.3.2",
      "body": "额",
      "code": "啦啦啦solve",
      "image": ""
    }
  ]
};
