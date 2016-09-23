# hello-react

## 環境構築コマンドリスト

### プロジェクト作成
mkdir プロジェクト名  
cd プロジェクト名  

### npmインストール
npm init  

### プロジェクト配下のフォルダを生成
mkdir src dist  

### プロジェクト配下のファイルを生成
touch ./src/app.js  
touch ./index.html  
touch .babelrc  
touch webpack.config.js

### ライブラリインストール
##### react用ライブラリ
npm install --save react react-dom  

##### ビルド用ライブラリ
npm install -g webpack  
npm install --save-dev webpack  
npm install --save-dev babel-loader babel-core  
npm install --save-dev babel-preset-react  
npm install --save-dev babel-preset-es2015  
npm install --save-dev babel-preset-stage-0  
npm install --save-dev jsx-loader  

### 起動用コマンド
npm run watch  
