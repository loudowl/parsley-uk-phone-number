(function () {
    var validateUkPhoneNumber = function (phoneNumber) {
        if (!validateFormat(phoneNumber)) {
          return false;
        }

        if (!validatePrefix(phoneNumber)) {
          return false;
        }

        return true;
    };

    var validateFormat = function (phoneNumber) {
        var formatChecker = new RegExp('^\\(?(?:(?:0(?:0|11)\\)?[\\s-]?\\(?|\\+)44\\)?[\\s-]?\\(?(?:0\\)?[\\s-]?\\(?)?|0)(?:\\d{2}\\)?[\\s-]?\\d{4}[\\s-]?\\d{4}|\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{3,4}|\\d{4}\\)?[\\s-]?(?:\\d{5}|\\d{3}[\\s-]?\\d{3})|\\d{5}\\)?[\\s-]?\\d{4,5}|8(?:00[\\s-]?11[\\s-]?11|45[\\s-]?46[\\s-]?4\\d))(?:(?:[\\s-]?(?:x|ext\\.?\\s?|\\#)\\d+)?)$');

        return formatChecker.test(phoneNumber);
    };

    var validatePrefix = function(phoneNumber) {
        var validators = [
          // Ranges 2d, 11d, 1d1, 1ddd (and 1dddd) with 10 digits, 1ddd, 1dddd with 9 digits; including NDO
          new RegExp('(^(2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[012789]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|2[02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79]|8[0-5789])|5(?:0[1235-9]|2[024-9]|3[0145689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3})$)|(^(2\\d[2-9]\\d{7}|1(?:1\\d|\\d1)[2-9]\\d{6}|1(?:[248][02-9]\\d[2-9]\\d{4,5}|(?:3(?:[02-79]\\d|8[0-69])|5(?:[04-9]\\d|2[0-35-9]|3[0-8])|6(?:[02-8]\\d|9[0-689])|7(?:[02-5789]\\d|6[0-79])|9(?:[0235-9]\\d|4[0-5789]))[2-9]\\d{4,5}|(?:387(?:3[2-9]|[24-9]\\d)|5(?:24(?:2[2-9]|[3-9]\\d)|39(?:[456][2-9]|[23789]\\d))|697(?:[347][2-9]|[25689]\\d)|768(?:[347][2-9]|[25679]\\d)|946(?:7[2-9]|[2-689]\\d))\\d{3,4}))$)'),
          // Ranges 2d, 11d, 1d1, 1ddd (and 1dddd) with 10 digits, 1ddd, 1dddd with 9 digits; excluding NDO
          new RegExp('^(2\\d[2-9]\\d{7}|1(?:1\\d|\\d1)[2-9]\\d{6}|1(?:[248][02-9]\\d[2-9]\\d{4,5}|(?:3(?:[02-79]\\d|8[0-69])|5(?:[04-9]\\d|2[0-35-9]|3[0-8])|6(?:[02-8]\\d|9[0-689])|7(?:[02-5789]\\d|6[0-79])|9(?:[0235-9]\\d|4[0-5789]))[2-9]\\d{4,5}|(?:387(?:3[2-9]|[24-9]\\d)|5(?:24(?:2[2-9]|[3-9]\\d)|39(?:[456][2-9]|[23789]\\d))|697(?:[347][2-9]|[25689]\\d)|768(?:[347][2-9]|[25679]\\d)|946(?:7[2-9]|[2-689]\\d))\\d{3,4}))$'),
          // Ranges 7ddd (including 7624) (not 70, 76) (excluding protected ranges) with 10 digits
          new RegExp('^7(?:[1-4]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|624|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[04-9]\\d|1[02-9]|2[0-35-9]|3[0-689]))\\d{6}$'),
          // Ranges 76 (excluding 7624) with 10 digits
          new RegExp('^76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}$'),
          // Ranges 800 1111 with 7 digits, 800 with 9 or 10 digits, 808 with 10 digits, 500 with 9 digits
          new RegExp('^80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}$'),
          // Ranges 871, 872, 873, 90d, 91d, 982, 983, 984, 989 with 10 digits
          new RegExp('^(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}$'),
          // Ranges 845 46 4d with 7 digits, 842, 843, 844, 845, 870 with 10 digits
          new RegExp('^8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})$'),
          // Ranges 70 with 10 digits
          new RegExp('^70\\d{8}$'),
          // Ranges 56 with 10 digits
          new RegExp('^56\\d{8}$'),
          // Ranges 30d, 33d, 34d, 37d, 55 with 10 digits
          new RegExp('^(?:3[0347]|55)\\d{8}$')
        ];

        var prefix = extractPrefix(phoneNumber);

        for (var i = 0; i < validators.length; i++) {
            if (validators[i].test(prefix)) {
                return true;
            }
        }

        return false;
    }

    var extractPrefix = function (phoneNumber) {
        var extractor = new RegExp('^\\(?(?:(?:0(?:0|11)\\)?[\\s-]?\\(?|\\+)(44)\\)?[\\s-]?\\(?(?:0\\)?[\\s-]?\\(?)?|0)([1-9]\\d{1,4}\\)?[\\s\\d-]+)(?:((?:x|ext\\.?\\s?|\\#)\\d+)?)$');
        var parts  = extractor.exec(phoneNumber);
        var prefix = parts[2];
        prefix = prefix.replace(/ /g,'');
        prefix = prefix.replace(/,/g,'');
        prefix = prefix.replace(/\(/g,'');
        prefix = prefix.replace(/\)/g,'');

        return prefix;
    };

    window.ParsleyConfig = window.ParsleyConfig || {};
    window.ParsleyConfig.validators = window.ParsleyConfig.validators || {};

    window.ParsleyConfig.validators.ukphonenumber = {
        fn: function(phoneNumber) {
          return validateUkPhoneNumber(phoneNumber);
        },
        priority: 32
    };

    window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};
    window.ParsleyConfig.i18n.en = $.extend(window.ParsleyConfig.i18n.en || {}, {
      ukphonenumber: "Please enter a valid UK phone number"
    });
})();
