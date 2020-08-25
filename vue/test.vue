<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Vue.js App</title>
    <style>
    </style>
</head>
<body>
    <div id="app">
        <!-- #app 내부에 템플릿을 출력할 것입니다.-->
        <h1>{{ message }}</h1>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10"></script>
    <script>
    new Vue({
        el: '#app',
        data:{
            message: 'hello world!',
        }
    })
    </script>
</body>
</html>