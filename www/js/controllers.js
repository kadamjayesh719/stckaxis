angular.module('starter.controllers', []).controller('DashCtrl', function($scope, Chats) {
    Chats.getData().then(function(data) {
        console.log(data);
        // $scope.items=new Object();
        // $scope.items=JSON.parse(data);
        $scope.items = [{
            "ShortCode": "APLAPOLLO",
            "Fincode": 190059,
            "Date": "07/09/2017",
            "ClosingPrice": 1613.60,
            "LongTrend": "UP",
            "Rating": 74,
            "COMPNAME": "APL Apollo Tubes Ltd.",
            "IND_CODE": 92,
            "FavStock": 0
        }, {
            "ShortCode": "MANINDS",
            "Fincode": 113269,
            "Date": "07/09/2017",
            "ClosingPrice": 94.15,
            "LongTrend": "UP",
            "Rating": 73,
            "COMPNAME": "Man Industries (India) Ltd.",
            "IND_CODE": 22,
            "FavStock": 0
        }, {
            "ShortCode": "PURVA",
            "Fincode": 132891,
            "Date": "07/09/2017",
            "ClosingPrice": 80.55,
            "LongTrend": "UP",
            "Rating": 72,
            "COMPNAME": "Puravankara Ltd.",
            "IND_CODE": 29,
            "FavStock": 0
        }, {
            "ShortCode": "WELINV",
            "Fincode": 218924,
            "Date": "07/09/2017",
            "ClosingPrice": 115.35,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Welspun Investments and Commercials Ltd.",
            "IND_CODE": 49,
            "FavStock": 0
        }, {
            "ShortCode": "ADANITRANS",
            "Fincode": 271875,
            "Date": "07/09/2017",
            "ClosingPrice": 129.65,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Adani Transmission Ltd.",
            "IND_CODE": 83,
            "FavStock": 0
        },
        {
            "ShortCode": "APLAPOLLO",
            "Fincode": 190059,
            "Date": "07/09/2017",
            "ClosingPrice": 1613.60,
            "LongTrend": "UP",
            "Rating": 74,
            "COMPNAME": "APL Apollo Tubes Ltd.",
            "IND_CODE": 92,
            "FavStock": 0
        }, {
            "ShortCode": "MANINDS",
            "Fincode": 113269,
            "Date": "07/09/2017",
            "ClosingPrice": 94.15,
            "LongTrend": "UP",
            "Rating": 73,
            "COMPNAME": "Man Industries (India) Ltd.",
            "IND_CODE": 22,
            "FavStock": 0
        }, {
            "ShortCode": "PURVA",
            "Fincode": 132891,
            "Date": "07/09/2017",
            "ClosingPrice": 80.55,
            "LongTrend": "UP",
            "Rating": 72,
            "COMPNAME": "Puravankara Ltd.",
            "IND_CODE": 29,
            "FavStock": 0
        }, {
            "ShortCode": "WELINV",
            "Fincode": 218924,
            "Date": "07/09/2017",
            "ClosingPrice": 115.35,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Welspun Investments and Commercials Ltd.",
            "IND_CODE": 49,
            "FavStock": 0
        }, {
            "ShortCode": "ADANITRANS",
            "Fincode": 271875,
            "Date": "07/09/2017",
            "ClosingPrice": 129.65,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Adani Transmission Ltd.",
            "IND_CODE": 83,
            "FavStock": 0
        },
        {
            "ShortCode": "APLAPOLLO",
            "Fincode": 190059,
            "Date": "07/09/2017",
            "ClosingPrice": 1613.60,
            "LongTrend": "UP",
            "Rating": 74,
            "COMPNAME": "APL Apollo Tubes Ltd.",
            "IND_CODE": 92,
            "FavStock": 0
        }, {
            "ShortCode": "MANINDS",
            "Fincode": 113269,
            "Date": "07/09/2017",
            "ClosingPrice": 94.15,
            "LongTrend": "UP",
            "Rating": 73,
            "COMPNAME": "Man Industries (India) Ltd.",
            "IND_CODE": 22,
            "FavStock": 0
        }, {
            "ShortCode": "PURVA",
            "Fincode": 132891,
            "Date": "07/09/2017",
            "ClosingPrice": 80.55,
            "LongTrend": "UP",
            "Rating": 72,
            "COMPNAME": "Puravankara Ltd.",
            "IND_CODE": 29,
            "FavStock": 0
        }, {
            "ShortCode": "WELINV",
            "Fincode": 218924,
            "Date": "07/09/2017",
            "ClosingPrice": 115.35,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Welspun Investments and Commercials Ltd.",
            "IND_CODE": 49,
            "FavStock": 0
        }, {
            "ShortCode": "ADANITRANS",
            "Fincode": 271875,
            "Date": "07/09/2017",
            "ClosingPrice": 129.65,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Adani Transmission Ltd.",
            "IND_CODE": 83,
            "FavStock": 0
        },
        {
            "ShortCode": "APLAPOLLO",
            "Fincode": 190059,
            "Date": "07/09/2017",
            "ClosingPrice": 1613.60,
            "LongTrend": "UP",
            "Rating": 74,
            "COMPNAME": "APL Apollo Tubes Ltd.",
            "IND_CODE": 92,
            "FavStock": 0
        }, {
            "ShortCode": "MANINDS",
            "Fincode": 113269,
            "Date": "07/09/2017",
            "ClosingPrice": 94.15,
            "LongTrend": "UP",
            "Rating": 73,
            "COMPNAME": "Man Industries (India) Ltd.",
            "IND_CODE": 22,
            "FavStock": 0
        }, {
            "ShortCode": "PURVA",
            "Fincode": 132891,
            "Date": "07/09/2017",
            "ClosingPrice": 80.55,
            "LongTrend": "UP",
            "Rating": 72,
            "COMPNAME": "Puravankara Ltd.",
            "IND_CODE": 29,
            "FavStock": 0
        }, {
            "ShortCode": "WELINV",
            "Fincode": 218924,
            "Date": "07/09/2017",
            "ClosingPrice": 115.35,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Welspun Investments and Commercials Ltd.",
            "IND_CODE": 49,
            "FavStock": 0
        }, {
            "ShortCode": "ADANITRANS",
            "Fincode": 271875,
            "Date": "07/09/2017",
            "ClosingPrice": 129.65,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Adani Transmission Ltd.",
            "IND_CODE": 83,
            "FavStock": 0
        },
        {
            "ShortCode": "APLAPOLLO",
            "Fincode": 190059,
            "Date": "07/09/2017",
            "ClosingPrice": 1613.60,
            "LongTrend": "UP",
            "Rating": 74,
            "COMPNAME": "APL Apollo Tubes Ltd.",
            "IND_CODE": 92,
            "FavStock": 0
        }, {
            "ShortCode": "MANINDS",
            "Fincode": 113269,
            "Date": "07/09/2017",
            "ClosingPrice": 94.15,
            "LongTrend": "UP",
            "Rating": 73,
            "COMPNAME": "Man Industries (India) Ltd.",
            "IND_CODE": 22,
            "FavStock": 0
        }, {
            "ShortCode": "PURVA",
            "Fincode": 132891,
            "Date": "07/09/2017",
            "ClosingPrice": 80.55,
            "LongTrend": "UP",
            "Rating": 72,
            "COMPNAME": "Puravankara Ltd.",
            "IND_CODE": 29,
            "FavStock": 0
        }, {
            "ShortCode": "WELINV",
            "Fincode": 218924,
            "Date": "07/09/2017",
            "ClosingPrice": 115.35,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Welspun Investments and Commercials Ltd.",
            "IND_CODE": 49,
            "FavStock": 0
        }, {
            "ShortCode": "ADANITRANS",
            "Fincode": 271875,
            "Date": "07/09/2017",
            "ClosingPrice": 129.65,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Adani Transmission Ltd.",
            "IND_CODE": 83,
            "FavStock": 0
        },
        {
            "ShortCode": "APLAPOLLO",
            "Fincode": 190059,
            "Date": "07/09/2017",
            "ClosingPrice": 1613.60,
            "LongTrend": "UP",
            "Rating": 74,
            "COMPNAME": "APL Apollo Tubes Ltd.",
            "IND_CODE": 92,
            "FavStock": 0
        }, {
            "ShortCode": "MANINDS",
            "Fincode": 113269,
            "Date": "07/09/2017",
            "ClosingPrice": 94.15,
            "LongTrend": "UP",
            "Rating": 73,
            "COMPNAME": "Man Industries (India) Ltd.",
            "IND_CODE": 22,
            "FavStock": 0
        }, {
            "ShortCode": "PURVA",
            "Fincode": 132891,
            "Date": "07/09/2017",
            "ClosingPrice": 80.55,
            "LongTrend": "UP",
            "Rating": 72,
            "COMPNAME": "Puravankara Ltd.",
            "IND_CODE": 29,
            "FavStock": 0
        }, {
            "ShortCode": "WELINV",
            "Fincode": 218924,
            "Date": "07/09/2017",
            "ClosingPrice": 115.35,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Welspun Investments and Commercials Ltd.",
            "IND_CODE": 49,
            "FavStock": 0
        }, {
            "ShortCode": "ADANITRANS",
            "Fincode": 271875,
            "Date": "07/09/2017",
            "ClosingPrice": 129.65,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Adani Transmission Ltd.",
            "IND_CODE": 83,
            "FavStock": 0
        },
        {
            "ShortCode": "APLAPOLLO",
            "Fincode": 190059,
            "Date": "07/09/2017",
            "ClosingPrice": 1613.60,
            "LongTrend": "UP",
            "Rating": 74,
            "COMPNAME": "APL Apollo Tubes Ltd.",
            "IND_CODE": 92,
            "FavStock": 0
        }, {
            "ShortCode": "MANINDS",
            "Fincode": 113269,
            "Date": "07/09/2017",
            "ClosingPrice": 94.15,
            "LongTrend": "UP",
            "Rating": 73,
            "COMPNAME": "Man Industries (India) Ltd.",
            "IND_CODE": 22,
            "FavStock": 0
        }, {
            "ShortCode": "PURVA",
            "Fincode": 132891,
            "Date": "07/09/2017",
            "ClosingPrice": 80.55,
            "LongTrend": "UP",
            "Rating": 72,
            "COMPNAME": "Puravankara Ltd.",
            "IND_CODE": 29,
            "FavStock": 0
        }, {
            "ShortCode": "WELINV",
            "Fincode": 218924,
            "Date": "07/09/2017",
            "ClosingPrice": 115.35,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Welspun Investments and Commercials Ltd.",
            "IND_CODE": 49,
            "FavStock": 0
        }, {
            "ShortCode": "ADANITRANS",
            "Fincode": 271875,
            "Date": "07/09/2017",
            "ClosingPrice": 129.65,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Adani Transmission Ltd.",
            "IND_CODE": 83,
            "FavStock": 0
        },
        {
            "ShortCode": "APLAPOLLO",
            "Fincode": 190059,
            "Date": "07/09/2017",
            "ClosingPrice": 1613.60,
            "LongTrend": "UP",
            "Rating": 74,
            "COMPNAME": "APL Apollo Tubes Ltd.",
            "IND_CODE": 92,
            "FavStock": 0
        }, {
            "ShortCode": "MANINDS",
            "Fincode": 113269,
            "Date": "07/09/2017",
            "ClosingPrice": 94.15,
            "LongTrend": "UP",
            "Rating": 73,
            "COMPNAME": "Man Industries (India) Ltd.",
            "IND_CODE": 22,
            "FavStock": 0
        }, {
            "ShortCode": "PURVA",
            "Fincode": 132891,
            "Date": "07/09/2017",
            "ClosingPrice": 80.55,
            "LongTrend": "UP",
            "Rating": 72,
            "COMPNAME": "Puravankara Ltd.",
            "IND_CODE": 29,
            "FavStock": 0
        }, {
            "ShortCode": "WELINV",
            "Fincode": 218924,
            "Date": "07/09/2017",
            "ClosingPrice": 115.35,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Welspun Investments and Commercials Ltd.",
            "IND_CODE": 49,
            "FavStock": 0
        }, {
            "ShortCode": "ADANITRANS",
            "Fincode": 271875,
            "Date": "07/09/2017",
            "ClosingPrice": 129.65,
            "LongTrend": "UP",
            "Rating": 68,
            "COMPNAME": "Adani Transmission Ltd.",
            "IND_CODE": 83,
            "FavStock": 0
        }

        ]
    });
}).controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
}).controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
}).controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});