(function(_0xe984cc, _0x2b4d6e) {
    var _0x430926 = a0_0x4d85,
        _0x4da93a = _0xe984cc();
    while (!![]) {
        try {
            var _0x32aa94 = -parseInt(_0x430926(0x210)) / 0x1 * (-parseInt(_0x430926(0x21e)) / 0x2) + parseInt(_0x430926(0x153)) / 0x3 * (-parseInt(_0x430926(0x1f6)) / 0x4) + -parseInt(_0x430926(0x1ae)) / 0x5 + parseInt(_0x430926(0x21c)) / 0x6 + -parseInt(_0x430926(0x1a9)) / 0x7 + -parseInt(_0x430926(0x1fd)) / 0x8 * (parseInt(_0x430926(0x1db)) / 0x9) + parseInt(_0x430926(0x20a)) / 0xa * (parseInt(_0x430926(0x1ef)) / 0xb);
            if (_0x32aa94 === _0x2b4d6e) break;
            else _0x4da93a['push'](_0x4da93a['shift']());
        } catch (_0x274fee) {
            _0x4da93a['push'](_0x4da93a['shift']());
        }
    }
}(a0_0x391d, 0x32e3a), ((() => {
    'use strict';
    var _0x24870f = a0_0x4d85;
    var _0x18c17b = {
            0x396: (_0x3972f3, _0x1d3101, _0x31485c) => {
                var _0x3464a9 = a0_0x4d85;
                _0x31485c['r'](_0x1d3101), _0x31485c['d'](_0x1d3101, {
                    'adSdk': () => _0x13fc48
                });
                var _0x12d481 = _0x31485c(0xc8),
                    _0x236afe = {
                        '310-91games': _0x3464a9(0x1df)
                    };

                function _0x2039a4(_0x4afea6, _0x6d318a, _0x12a42b) {
                    _0x6d318a in _0x4afea6 ? Object['defineProperty'](_0x4afea6, _0x6d318a, {
                        'value': _0x12a42b,
                        'enumerable': !0x0,
                        'configurable': !0x0,
                        'writable': !0x0
                    }) : _0x4afea6[_0x6d318a] = _0x12a42b;
                }
                class _0x13fc48 {
                    static[_0x3464a9(0x1d5)];
                    constructor(_0x479ddd) {
                        var _0x4e28a0 = _0x3464a9;
                        this[_0x4e28a0(0x19e)][_0x4e28a0(0x16f)] = _0x479ddd, this[_0x4e28a0(0x19e)][_0x4e28a0(0x1cd)](), this[_0x4e28a0(0x19e)]['_get_ad_code']()['then'](_0x5102da => {
                            var _0x2fdfc1 = _0x4e28a0;
                            console['log'](_0x5102da), this[_0x2fdfc1(0x19e)][_0x2fdfc1(0x1b2)] = _0x5102da[_0x2fdfc1(0x1b2)], this[_0x2fdfc1(0x19e)]['is_adsense'] ? this[_0x2fdfc1(0x19e)][_0x2fdfc1(0x1b8)](_0x5102da['ori_ad_data']) : this[_0x2fdfc1(0x19e)][_0x2fdfc1(0x150)](_0x5102da[_0x2fdfc1(0x1e3)]);
                        });
                    }['interstitialAd'](_0x22ce0c) {
                        var _0x5597ef = _0x3464a9;
                        (0x0, _0x12d481['MY_CONSOLE_ERROR'])(_0x5597ef(0x208), _0x22ce0c), this[_0x5597ef(0x19e)][_0x5597ef(0x1b2)] ? adBreak({
                            'type': 'start',
                            'beforeAd' () {
                                var _0x3492d5 = _0x5597ef;
                                _0x22ce0c[_0x3492d5(0x1fc)]();
                            },
                            'afterAd' () {
                                var _0x84a846 = _0x5597ef;
                                _0x22ce0c[_0x84a846(0x178)]();
                            },
                            'adBreakDone' (_0x422216) {
                                var _0x2ca71a = _0x5597ef;
                                switch (_0x422216[_0x2ca71a(0x1f4)]) {
                                    case _0x2ca71a(0x22b):
                                    case _0x2ca71a(0x1f2):
                                    case _0x2ca71a(0x1c7):
                                    case _0x2ca71a(0x1bc):
                                        _0x22ce0c['error'](_0x422216[_0x2ca71a(0x1f4)]);
                                }
                            }
                        }) : this[_0x5597ef(0x19e)][_0x5597ef(0x1f3)](_0x22ce0c);
                    }[_0x3464a9(0x1e0)](_0x11d67e) {
                        var _0x173785 = _0x3464a9;
                        this['constructor'][_0x173785(0x1b2)] ? adBreak({
                            'type': _0x173785(0x17e),
                            'beforeAd' () {
                                _0x11d67e['beforeAd']();
                            },
                            'beforeReward' (_0x1691d6) {
                                _0x1691d6();
                            },
                            'adDismissed' () {
                                _0x11d67e['adDismissed']();
                            },
                            'adViewed' () {
                                var _0x4e3150 = _0x173785;
                                _0x11d67e[_0x4e3150(0x196)]();
                            },
                            'adBreakDone' (_0x13130e) {
                                var _0x5aa876 = _0x173785;
                                switch (_0x13130e[_0x5aa876(0x1f4)]) {
                                    case _0x5aa876(0x22b):
                                    case _0x5aa876(0x1f2):
                                    case _0x5aa876(0x1c7):
                                    case _0x5aa876(0x1bc):
                                        _0x11d67e['error'](_0x13130e['breakStatus']);
                                }
                            }
                        }) : this['constructor'][_0x173785(0x1f3)](_0x11d67e);
                    }
                    static[_0x3464a9(0x1f3)](_0x4bb66e) {
                        var _0x35a122 = _0x3464a9;
                        this[_0x35a122(0x22e)] || (this[_0x35a122(0x22e)] = !0x0, this['adx_callback'] = _0x4bb66e, this[_0x35a122(0x19e)][_0x35a122(0x14b)] = _0x4bb66e, window[_0x35a122(0x1c4)][_0x35a122(0x1cc)](window[_0x35a122(0x1d2)]));
                    }
                    static[_0x3464a9(0x150)](_0xc7b494) {
                        var _0x5970cd = _0x3464a9,
                            _0x35476d = document[_0x5970cd(0x238)]('script');
                        _0x35476d[_0x5970cd(0x235)] = _0x5970cd(0x18a), _0x35476d[_0x5970cd(0x156)] = _0x5970cd(0x197), document[_0x5970cd(0x206)][_0x5970cd(0x229)](_0x35476d), _0x35476d[_0x5970cd(0x1d9)] = () => {
                            var _0x31de2d = _0x5970cd,
                                _0x47867d = window[_0x31de2d(0x1ee)](this[_0x31de2d(0x16f)]['el'])[_0x31de2d(0x1be)];
                            this[_0x31de2d(0x1d5)] = !0x0, _0x31de2d(0x180) === _0x47867d && (this[_0x31de2d(0x16f)]['el'][_0x31de2d(0x1ed)][_0x31de2d(0x1be)] = _0x31de2d(0x15a)), window[_0x31de2d(0x20e)] = document[_0x31de2d(0x238)](_0x31de2d(0x14f)), window['adContainer'][_0x31de2d(0x1ed)][_0x31de2d(0x145)] = _0x31de2d(0x1b4), this[_0x31de2d(0x16f)]['el'][_0x31de2d(0x229)](window[_0x31de2d(0x20e)]), this[_0x31de2d(0x15e)](_0xc7b494), window[_0x31de2d(0x232)](_0x31de2d(0x1fb), () => {
                                var _0x3a5abe = _0x31de2d,
                                    _0x2025c9, _0x4a32be;
                                window['adsManager'] && (_0x2025c9 = this[_0x3a5abe(0x16f)]['el'][_0x3a5abe(0x1dd)], _0x4a32be = this[_0x3a5abe(0x16f)]['el']['clientHeight'], window[_0x3a5abe(0x16d)][_0x3a5abe(0x1fb)](_0x2025c9, _0x4a32be, google[_0x3a5abe(0x1b9)][_0x3a5abe(0x1e9)][_0x3a5abe(0x163)]));
                            });
                        };
                    }
                    static[_0x3464a9(0x15e)](_0x56a8ec) {
                        var _0x5d8c3a = _0x3464a9;
                        google[_0x5d8c3a(0x1b9)][_0x5d8c3a(0x161)][_0x5d8c3a(0x15b)](google[_0x5d8c3a(0x1b9)][_0x5d8c3a(0x1ba)][_0x5d8c3a(0x171)][_0x5d8c3a(0x146)]), window[_0x5d8c3a(0x1b5)] = new google['ima']['AdDisplayContainer'](window[_0x5d8c3a(0x20e)]), window[_0x5d8c3a(0x1c4)] = new google[(_0x5d8c3a(0x1b9))][(_0x5d8c3a(0x15d))](window[_0x5d8c3a(0x1b5)]), window[_0x5d8c3a(0x1c4)][_0x5d8c3a(0x18e)]()[_0x5d8c3a(0x15b)](google['ima'][_0x5d8c3a(0x1ba)][_0x5d8c3a(0x171)][_0x5d8c3a(0x146)]), window['adsLoader']['addEventListener'](google[_0x5d8c3a(0x1b9)][_0x5d8c3a(0x167)]['Type'][_0x5d8c3a(0x149)], this[_0x5d8c3a(0x1d8)][_0x5d8c3a(0x14d)](this), !0x1), window[_0x5d8c3a(0x1c4)][_0x5d8c3a(0x232)](google[_0x5d8c3a(0x1b9)][_0x5d8c3a(0x216)][_0x5d8c3a(0x1cf)]['AD_ERROR'], this[_0x5d8c3a(0x221)]['bind'](this), !0x1), window[_0x5d8c3a(0x1d2)] = new google['ima'][(_0x5d8c3a(0x1ab))](), window[_0x5d8c3a(0x1d2)][_0x5d8c3a(0x18c)] = _0x56a8ec, window[_0x5d8c3a(0x1d2)][_0x5d8c3a(0x1f0)] = 0x3e8, window[_0x5d8c3a(0x1d2)][_0x5d8c3a(0x1e1)] = this['config']['el'][_0x5d8c3a(0x1dd)], window['adsRequest']['linearAdSlotHeight'] = this[_0x5d8c3a(0x16f)]['el'][_0x5d8c3a(0x1c2)], window[_0x5d8c3a(0x1b5)][_0x5d8c3a(0x234)]();
                    }
                    static[_0x3464a9(0x1d8)](_0x3e3f27) {
                        var _0x204911 = _0x3464a9;
                        window[_0x204911(0x16d)] = _0x3e3f27[_0x204911(0x1fa)](this[_0x204911(0x16f)]['el']);
                        var _0x39a177 = this['config']['el'][_0x204911(0x1dd)],
                            _0x3e3f27 = this[_0x204911(0x16f)]['el']['clientHeight'];
                        this['is_loading'] = !0x1, window['adsManager']['init'](_0x39a177, _0x3e3f27, google[_0x204911(0x1b9)]['ViewMode']['NORMAL']), window[_0x204911(0x16d)][_0x204911(0x20f)](), window[_0x204911(0x16d)][_0x204911(0x232)](google[_0x204911(0x1b9)][_0x204911(0x216)][_0x204911(0x1cf)][_0x204911(0x1ce)], this[_0x204911(0x221)]['bind'](this)), window[_0x204911(0x16d)][_0x204911(0x232)](google[_0x204911(0x1b9)][_0x204911(0x220)][_0x204911(0x1cf)][_0x204911(0x168)], () => {
                            var _0x5eb9c2 = _0x204911;
                            window[_0x5eb9c2(0x20e)][_0x5eb9c2(0x1ed)]['display'] = _0x5eb9c2(0x1aa), this['adx_callback'][_0x5eb9c2(0x1fc)]();
                        }), window['adsManager'][_0x204911(0x232)](google[_0x204911(0x1b9)][_0x204911(0x220)][_0x204911(0x1cf)][_0x204911(0x14c)], () => {
                            var _0x514e4 = _0x204911;
                            window[_0x514e4(0x20e)][_0x514e4(0x1ed)][_0x514e4(0x1a7)] = _0x514e4(0x21f), this['adx_callback'][_0x514e4(0x178)] && this['adx_callback'][_0x514e4(0x178)]();
                        }), window['adsManager']['addEventListener'](google[_0x204911(0x1b9)][_0x204911(0x220)][_0x204911(0x1cf)]['SKIPPED'], () => {
                            var _0x225cee = _0x204911;
                            this[_0x225cee(0x14b)]['adDismissed'] && this[_0x225cee(0x14b)][_0x225cee(0x14e)]();
                        }), window[_0x204911(0x16d)][_0x204911(0x232)](google[_0x204911(0x1b9)]['AdEvent']['Type'][_0x204911(0x1c8)], () => {
                            var _0x3ce473 = _0x204911;
                            window[_0x3ce473(0x20e)]['style'][_0x3ce473(0x1a7)] = _0x3ce473(0x21f), this['adx_callback'][_0x3ce473(0x196)] && this['adx_callback'][_0x3ce473(0x196)]();
                        });
                    }
                    static['_onAdError'](_0x4023b3) {
                        var _0x2eec2c = _0x3464a9;
                        this[_0x2eec2c(0x22e)] = !0x1, window[_0x2eec2c(0x20e)]['style'][_0x2eec2c(0x1a7)] = _0x2eec2c(0x21f), this[_0x2eec2c(0x14b)][_0x2eec2c(0x1f2)](_0x4023b3[_0x2eec2c(0x166)]());
                    }
                    static['_config_adsense'](_0x2a1b24) {
                        var _0x53b7c8 = _0x3464a9;
                        let _0x2d7a68 = this,
                            _0xd59bd7 = document[_0x53b7c8(0x238)](_0x53b7c8(0x177));
                        _0xd59bd7[_0x53b7c8(0x156)] = _0x53b7c8(0x236), _0xd59bd7[_0x53b7c8(0x20d)](_0x53b7c8(0x228), _0x53b7c8(0x143));
                        var _0x136079 = _0x2a1b24['split'](',');
                        for (let _0x268fde = 0x0; _0x268fde < _0x136079['length']; _0x268fde++) _0xd59bd7[_0x53b7c8(0x20d)](_0x136079[_0x268fde][_0x53b7c8(0x195)]('=')[0x0], _0x136079[_0x268fde][_0x53b7c8(0x195)]('=')[0x1]);
                        this[_0x53b7c8(0x16f)]['is_test'] && _0xd59bd7[_0x53b7c8(0x20d)](_0x53b7c8(0x199), 'on'), document[_0x53b7c8(0x206)][_0x53b7c8(0x229)](_0xd59bd7), window['adsbygoogle'] = window['adsbygoogle'] || [], window[_0x53b7c8(0x1ff)] = window[_0x53b7c8(0x1fe)] = function(_0x193214) {
                            var _0x23e0f5 = _0x53b7c8;
                            adsbygoogle[_0x23e0f5(0x190)](_0x193214);
                        }, adConfig({
                            'preloadAdBreaks': 'on',
                            'sound': 'on',
                            'onReady' () {
                                var _0x33d042 = _0x53b7c8;
                                _0x2d7a68[_0x33d042(0x1d5)] = !0x0;
                            }
                        });
                    }
                    static[_0x3464a9(0x1d7)]() {
                        var _0x427786 = _0x3464a9,
                            _0x2dcbb1 = document[_0x427786(0x169)],
                            _0x1eb1ef = new URLSearchParams(_0x2dcbb1[_0x427786(0x198)])[_0x427786(0x1dc)](_0x427786(0x191)),
                            _0x2dcbb1 = this[_0x427786(0x16f)]['client'],
                            _0x3fbc7d = _0x236afe[_0x1eb1ef + '-' + _0x2dcbb1];
                        let _0x46e52b = !!(_0x3fbc7d = _0x3fbc7d || _0x236afe[_0x2dcbb1] || _0x427786(0x21d))[_0x427786(0x1d3)](_0x427786(0x17c));
                        return new Promise(_0x4cd06f => {
                            _0x4cd06f({
                                'is_adsense': _0x46e52b,
                                'ori_ad_data': _0x3fbc7d
                            });
                        });
                    }
                    static[_0x3464a9(0x1cd)]() {
                        var _0xbab22f = _0x3464a9,
                            _0x250749 = document['getElementById'](_0xbab22f(0x15f));
                        if (!_0x250749) {
                            const _0x2c352b = document[_0xbab22f(0x238)]('script');
                            _0x2c352b['id'] = _0xbab22f(0x15f), _0x2c352b[_0xbab22f(0x16c)] = _0xbab22f(0x19b), document[_0xbab22f(0x206)][_0xbab22f(0x229)](_0x2c352b), window[_0xbab22f(0x1d9)] = () => {
                                var _0xd09a39 = _0xbab22f,
                                    _0xb0f534;
                                document[_0xd09a39(0x222)]('gtm-noscript') || ((_0xb0f534 = document[_0xd09a39(0x238)](_0xd09a39(0x1a3)))['id'] = _0xd09a39(0x17d), _0xb0f534[_0xd09a39(0x16c)] = _0xd09a39(0x1ad), document[_0xd09a39(0x226)][_0xd09a39(0x229)](_0x2c352b));
                            };
                        }
                    }
                }
                _0x2039a4(_0x13fc48, _0x3464a9(0x16f), void 0x0), _0x2039a4(_0x13fc48, _0x3464a9(0x1b2), void 0x0), _0x2039a4(_0x13fc48, _0x3464a9(0x1d5), void 0x0), _0x2039a4(_0x13fc48, 'adx_callback', {
                    'error': _0x12d481[_0x3464a9(0x172)]
                }), _0x2039a4(_0x13fc48, _0x3464a9(0x22e), !0x1);
            },
            0xc8: (_0x17ba27, _0x6507ae) => {
                var _0x5712fa = a0_0x4d85;
                Object[_0x5712fa(0x21a)](_0x6507ae, _0x5712fa(0x233), {
                    'value': !0x0
                }), _0x6507ae[_0x5712fa(0x172)] = _0x6507ae[_0x5712fa(0x1a2)] = void 0x0, _0x6507ae['MY_CONSOLE_LOG'] = window[_0x5712fa(0x1e2)][_0x5712fa(0x22c)], _0x6507ae[_0x5712fa(0x172)] = window[_0x5712fa(0x1e2)][_0x5712fa(0x22c)];
            },
            0x25f: function(_0x317d6f, _0x29180c, _0x43db2c) {
                var _0x46a6ad = a0_0x4d85;

                function _0x3ca491(_0xb164ab) {
                    var _0x5402c4 = a0_0x4d85;
                    _0xb164ab = _0xb164ab || function() {}, _0x4ceb50[_0x5402c4(0x1a6)][_0x5402c4(0x1d5)] ? null != _0xbedb94 && _0xbedb94[_0x5402c4(0x1e0)]({
                        'beforeAd': function() {
                            var _0x15ffd9 = _0x5402c4;
                            _0x552c8b('The\x20ad\x20starts\x20playing,\x20and\x20the\x20game\x20should\x20pause.'), window[_0x15ffd9(0x200)] && window[_0x15ffd9(0x200)][_0x15ffd9(0x190)]({
                                'event': _0x15ffd9(0x1d0),
                                'action': 'beforeAd'
                            });
                        },
                        'adDismissed': function() {
                            var _0x56d794 = _0x5402c4;
                            _0x552c8b(_0x56d794(0x18d)), _0xb164ab(!0x0, _0x56d794(0x18d)), window[_0x56d794(0x200)] && window[_0x56d794(0x200)][_0x56d794(0x190)]({
                                'event': _0x56d794(0x1d0),
                                'action': _0x56d794(0x202)
                            });
                        },
                        'adViewed': function() {
                            var _0x3af6e3 = _0x5402c4;
                            _0x552c8b('Ad\x20was\x20viewed\x20and\x20closed.'), _0xb164ab(!0x0, _0x3af6e3(0x192)), window[_0x3af6e3(0x200)] && window[_0x3af6e3(0x200)][_0x3af6e3(0x190)]({
                                'event': _0x3af6e3(0x1d0),
                                'action': 'viewed'
                            });
                        },
                        'error': function(_0x449df2) {
                            var _0x141b78 = _0x5402c4;
                            (0x0, _0x3e5914[_0x141b78(0x1a2)])('AD_ERROR', _0x449df2), _0xb164ab(!0x1, _0x449df2), window['dataLayer'] && window[_0x141b78(0x200)]['push']({
                                'event': _0x141b78(0x1d0),
                                'action': _0x141b78(0x1f2)
                            });
                        }
                    }) : (_0xb164ab(!0x1, 'doodoo\x20ads\x20not\x20ready'), _0x552c8b(_0x5402c4(0x1a5)));
                }

                function _0x6c580a(_0x238740) {
                    var _0x5276c9 = a0_0x4d85;
                    _0x238740 = _0x238740 || function() {}, _0x4ceb50[_0x5276c9(0x1a6)][_0x5276c9(0x1d5)] ? null != _0xbedb94 && _0xbedb94['interstitialAd']({
                        'beforeAd': function() {
                            var _0x3664a1 = _0x5276c9;
                            _0x552c8b(_0x3664a1(0x1c5)), window[_0x3664a1(0x200)] && window[_0x3664a1(0x200)][_0x3664a1(0x190)]({
                                'event': _0x3664a1(0x1e8),
                                'action': 'beforeAd'
                            });
                        },
                        'afterAd': function() {
                            var _0x2025ec = _0x5276c9;
                            _0x238740(!0x0, 'Ads\x20show\x20normally'), _0x552c8b(_0x2025ec(0x174)), window['dataLayer'] && window[_0x2025ec(0x200)][_0x2025ec(0x190)]({
                                'event': _0x2025ec(0x1e8),
                                'action': _0x2025ec(0x178)
                            });
                        },
                        'adDismissed': function() {
                            var _0x1da713 = _0x5276c9;
                            _0x552c8b(_0x1da713(0x154)), window['dataLayer'] && window[_0x1da713(0x200)][_0x1da713(0x190)]({
                                'event': 'doodoo_sdk_interstitial',
                                'action': 'adDismissed'
                            });
                        },
                        'adViewed': function() {
                            var _0x463b00 = _0x5276c9;
                            _0x552c8b('Ad\x20was\x20viewed\x20and\x20closed.'), _0x238740(!0x0, _0x463b00(0x192)), window[_0x463b00(0x200)] && window[_0x463b00(0x200)][_0x463b00(0x190)]({
                                'event': _0x463b00(0x1e8),
                                'action': _0x463b00(0x16e)
                            });
                        },
                        'error': function(_0x41fcb9) {
                            var _0xf40893 = _0x5276c9;
                            (_0x4ceb50[_0xf40893(0x1a6)][_0xf40893(0x22e)] = !0x1, _0x3e5914['MY_CONSOLE_LOG'])(_0xf40893(0x1ce), _0x41fcb9), _0x238740(!0x1, _0x41fcb9), window[_0xf40893(0x200)] && setTimeout(function() {
                                var _0x2cceb8 = _0xf40893;
                                window[_0x2cceb8(0x200)][_0x2cceb8(0x190)]({
                                    'event': 'doodoo_sdk_interstitial',
                                    'action': _0x2cceb8(0x1f2),
                                    'category': _0x41fcb9[_0x2cceb8(0x1b7)] && _0x41fcb9[_0x2cceb8(0x1b7)]() || _0x2cceb8(0x224)
                                });
                            });
                        }
                    }) : (_0x552c8b(_0x5276c9(0x1a5)), _0x238740(!0x1, 'doodoo\x20ads\x20not\x20ready'));
                }
                var _0xbedb94, _0x465acd = this && this[_0x46a6ad(0x1af)] || function(_0x91b8b8, _0x3f2595, _0x4388ef) {
                        var _0x559d04 = _0x46a6ad;
                        if (_0x4388ef || 0x2 === arguments['length']) {
                            for (var _0x558c98, _0x23f1bc = 0x0, _0x43287e = _0x3f2595['length']; _0x23f1bc < _0x43287e; _0x23f1bc++) !_0x558c98 && _0x23f1bc in _0x3f2595 || ((_0x558c98 = _0x558c98 || Array['prototype'][_0x559d04(0x223)][_0x559d04(0x1f1)](_0x3f2595, 0x0, _0x23f1bc))[_0x23f1bc] = _0x3f2595[_0x23f1bc]);
                        }
                        return _0x91b8b8[_0x559d04(0x205)](_0x558c98 || Array[_0x559d04(0x1d4)][_0x559d04(0x223)][_0x559d04(0x1f1)](_0x3f2595));
                    },
                    _0x4ceb50 = (Object[_0x46a6ad(0x21a)](_0x29180c, _0x46a6ad(0x233), {
                        'value': !0x0
                    }), _0x43db2c(0x396)),
                    _0x3e5914 = _0x43db2c(0xc8),
                    _0x573d5a = _0x43db2c(0x27a),
                    _0x552c8b = window[_0x46a6ad(0x1e2)][_0x46a6ad(0x22c)];
                (0x0, _0x573d5a[_0x46a6ad(0x170)])(), window[_0x46a6ad(0x1d9)] = function() {
                    var _0x10d8b7 = _0x46a6ad,
                        _0x20a4ac;
                    console['log'](_0x10d8b7(0x15c)), document[_0x10d8b7(0x222)]('gpt-script') || ((_0x20a4ac = document[_0x10d8b7(0x238)](_0x10d8b7(0x177)))[_0x10d8b7(0x235)] = _0x10d8b7(0x18a), _0x20a4ac[_0x10d8b7(0x156)] = _0x10d8b7(0x1b1), _0x20a4ac[_0x10d8b7(0x19a)] = !0x0, _0x20a4ac['id'] = _0x10d8b7(0x21b), document[_0x10d8b7(0x206)][_0x10d8b7(0x229)](_0x20a4ac));
                }, window[_0x46a6ad(0x1d9)] = function() {
                    var _0xe1d5cb = _0x46a6ad,
                        _0x2ac234 = {
                            'el': document['querySelector'](_0xe1d5cb(0x226)),
                            'client': _0xe1d5cb(0x18f),
                            'is_test': !0x0
                        };
                    _0xbedb94 = new _0x4ceb50['adSdk'](_0x2ac234);
                };

                function _0x180800() {
                    var _0x909680 = _0x46a6ad;
                    this['version'] = _0x909680(0x1d6), this[_0x909680(0x1e4)] = 0x3c, this['lastCommercialBreak'] = 0x0, window[_0x909680(0x200)] = window[_0x909680(0x200)] || [];
                }
                _0x180800[_0x46a6ad(0x1d4)][_0x46a6ad(0x194)] = function() {
                    return !0x1;
                }, _0x180800['prototype'][_0x46a6ad(0x144)] = function() {
                    var _0x49b1ab = _0x46a6ad,
                        _0x494b02 = this;
                    return _0x552c8b(_0x49b1ab(0x225)), new Promise(function(_0x2fafb0, _0x1a1662) {
                        var _0x1e9c0a = _0x49b1ab;
                        _0x552c8b('DooDooGameSdk::loading'), _0x494b02[_0x1e9c0a(0x212)]('init'), _0x2fafb0(!0x0);
                    });
                }, _0x180800['prototype'][_0x46a6ad(0x148)] = function() {
                    var _0x2b2e6f = _0x46a6ad;
                    _0x552c8b(_0x2b2e6f(0x189)), this['customEvent'](_0x2b2e6f(0x148));
                }, _0x180800['prototype'][_0x46a6ad(0x1f7)] = function() {
                    var _0x56bee9 = _0x46a6ad;
                    _0x552c8b(_0x56bee9(0x158)), this[_0x56bee9(0x212)](_0x56bee9(0x1f7));
                }, _0x180800[_0x46a6ad(0x1d4)][_0x46a6ad(0x22d)] = function() {
                    var _0x4924b2 = _0x46a6ad;
                    _0x552c8b('DooDooGameSdk::gameplayStart'), this[_0x4924b2(0x212)](_0x4924b2(0x22d));
                }, _0x180800['prototype']['gameplayStop'] = function() {
                    var _0x406e8f = _0x46a6ad;
                    _0x552c8b(_0x406e8f(0x1da)), this[_0x406e8f(0x212)]('gameplayStop');
                }, _0x180800[_0x46a6ad(0x1d4)][_0x46a6ad(0x1ea)] = function(_0x4e111f) {
                    var _0x2d9421 = _0x46a6ad;
                    _0x180800[_0x2d9421(0x185)] = _0x4e111f;
                }, _0x180800['prototype'][_0x46a6ad(0x175)] = function(_0x36d1db) {
                    return '';
                }, _0x180800[_0x46a6ad(0x1d4)][_0x46a6ad(0x165)] = function() {
                    var _0x2452a5 = _0x46a6ad;
                    for (var _0x12d1d2 = this, _0x1f8471 = [], _0x4e1ce5 = 0x0; _0x4e1ce5 < arguments[_0x2452a5(0x1c6)]; _0x4e1ce5++) _0x1f8471[_0x4e1ce5] = arguments[_0x4e1ce5];
                    return _0x552c8b[_0x2452a5(0x160)](void 0x0, _0x465acd([_0x2452a5(0x1b0)], _0x1f8471, !0x1)), new Promise(function(_0x4880ec, _0x30f87b) {
                        var _0x50ffd3 = _0x2452a5,
                            _0xf04a7a = Math[_0x50ffd3(0x187)](Date[_0x50ffd3(0x237)]() / 0x3e8);
                        _0x12d1d2[_0x50ffd3(0x1ec)] + _0x12d1d2[_0x50ffd3(0x1e4)] > _0xf04a7a ? (_0x552c8b(_0x50ffd3(0x1a0)), _0x12d1d2['customEvent']('commercialBreak', 'skipped'), _0x4880ec(!0x0)) : (_0x12d1d2[_0x50ffd3(0x1ec)] = _0xf04a7a, _0x552c8b(_0x50ffd3(0x1a4)), _0x6c580a(function(_0x707d39, _0x24126f) {
                            var _0x6db29f = _0x50ffd3;
                            _0x552c8b(_0x6db29f(0x22f), _0x707d39, _0x24126f), _0x707d39 ? (_0x12d1d2[_0x6db29f(0x212)](_0x6db29f(0x165), _0x6db29f(0x213)), _0x4880ec(!0x0)) : (_0x12d1d2[_0x6db29f(0x212)](_0x6db29f(0x165), _0x6db29f(0x217)), (0x0, _0x573d5a['makeShareEvent'])(_0x4880ec));
                        }));
                    });
                }, _0x180800[_0x46a6ad(0x1d4)]['rewardedBreak'] = function() {
                    var _0x181207 = _0x46a6ad;
                    for (var _0x575b35 = this, _0x79133b = [], _0x42f2a2 = 0x0; _0x42f2a2 < arguments['length']; _0x42f2a2++) _0x79133b[_0x42f2a2] = arguments[_0x42f2a2];
                    return _0x552c8b['apply'](void 0x0, _0x465acd([_0x181207(0x227)], _0x79133b, !0x1)), new Promise(function(_0x20c93e, _0x2f0d74) {
                        var _0xfc7ca9 = _0x181207,
                            _0xab5889 = Math[_0xfc7ca9(0x187)](Date[_0xfc7ca9(0x237)]() / 0x3e8);
                        _0x575b35['lastCommercialBreak'] = _0xab5889, _0x552c8b(_0xfc7ca9(0x203)), _0x3ca491(function(_0x58a962, _0x1cf920) {
                            var _0x1eaa43 = _0xfc7ca9;
                            _0x552c8b(_0x1eaa43(0x183), _0x58a962, _0x1cf920), _0x58a962 ? (_0x575b35['customEvent'](_0x1eaa43(0x1e6), 'success'), _0x20c93e(_0x58a962)) : (_0x575b35[_0x1eaa43(0x212)](_0x1eaa43(0x1e6), _0x1eaa43(0x217)), (0x0, _0x573d5a[_0x1eaa43(0x181)])(_0x20c93e));
                        });
                    });
                }, _0x180800['prototype'][_0x46a6ad(0x188)] = function(_0x4a152c) {
                    var _0x1417e4 = _0x46a6ad;
                    _0x552c8b('DooDooGameSdk::happyTime', _0x4a152c), this[_0x1417e4(0x212)](_0x1417e4(0x152));
                }, _0x180800['prototype'][_0x46a6ad(0x1c0)] = function(_0x5c289c, _0x27a506) {
                    var _0x126142 = _0x46a6ad;
                    _0x552c8b(_0x126142(0x214), _0x5c289c, _0x27a506), this[_0x126142(0x212)](_0x126142(0x1c0)), this[_0x126142(0x165)]();
                }, _0x180800[_0x46a6ad(0x1d4)][_0x46a6ad(0x17b)] = function(_0x1edf23) {
                    var _0x2acfea = _0x46a6ad;
                    _0x552c8b(_0x2acfea(0x231), _0x1edf23), this[_0x2acfea(0x212)](_0x2acfea(0x17b));
                }, _0x180800[_0x46a6ad(0x1d4)][_0x46a6ad(0x151)] = function() {
                    var _0x3b60cc = _0x46a6ad;
                    _0x552c8b(_0x3b60cc(0x209));
                }, _0x180800[_0x46a6ad(0x1d4)][_0x46a6ad(0x239)] = function() {
                    var _0x5e88d3 = _0x46a6ad;
                    _0x552c8b(_0x5e88d3(0x1bb)), this[_0x5e88d3(0x212)]('gameInteractive');
                }, _0x180800[_0x46a6ad(0x1d4)][_0x46a6ad(0x212)] = function(_0x6e249c, _0x73e54c) {
                    var _0x21bab8 = _0x46a6ad;
                    void 0x0 === _0x73e54c && (_0x73e54c = '');
                    for (var _0x159cdb = [], _0x592859 = 0x2; _0x592859 < arguments[_0x21bab8(0x1c6)]; _0x592859++) _0x159cdb[_0x592859 - 0x2] = arguments[_0x592859];
                    _0x552c8b('DooDooGameSdk::customEvent\x20[' + _0x6e249c + _0x21bab8(0x157) + _0x73e54c + ']\x20[' + _0x159cdb + ']'), window['dataLayer'] && window[_0x21bab8(0x200)]['push']({
                        'event': _0x21bab8(0x219),
                        'action': _0x6e249c,
                        'category': _0x73e54c
                    });
                    var _0x55ac11 = _0x6e249c;
                    _0x73e54c && (_0x55ac11 += '_' + _0x73e54c), setTimeout(function() {
                        var _0x374954 = _0x21bab8,
                            _0x24e015, _0x53cff3;
                        try {
                            var _0x13d111 = JSON[_0x374954(0x1de)]({
                                'game_id': new URLSearchParams(window[_0x374954(0x169)][_0x374954(0x198)])['get']('gid') || (null == (_0x24e015 = null === window || void 0x0 === window ? void 0x0 : window['location']) ? void 0x0 : _0x24e015[_0x374954(0x1d1)]) || '',
                                'event_name': _0x55ac11,
                                'page_url': (null == (_0x53cff3 = null === window || void 0x0 === window ? void 0x0 : window['location']) ? void 0x0 : _0x53cff3[_0x374954(0x1a1)]) || '',
                                'custom_data': {
                                    'sessionId': '',
                                    'distance': 0x0,
                                    '_fbp': '',
                                    '_fbc': ''
                                }
                            });
                            window['fetch'](_0x374954(0x19f), {
                                'method': _0x374954(0x20c),
                                'mode': _0x374954(0x1ca),
                                'cache': _0x374954(0x173),
                                'credentials': 'same-origin',
                                'headers': {
                                    'Content-Type': 'application/json',
                                    'uid': ''
                                },
                                'referrerPolicy': _0x374954(0x1b6),
                                'body': _0x13d111
                            })[_0x374954(0x159)](function(_0x2795e2) {
                                var _0x301bb8 = _0x374954;
                                _0x552c8b('track\x20game\x20error', _0x2795e2), window['dataLayer'][_0x301bb8(0x190)]({
                                    'event': _0x301bb8(0x219),
                                    'action': _0x301bb8(0x230)
                                });
                            });
                        } catch (_0x4ac886) {
                            _0x552c8b(_0x374954(0x19d), _0x4ac886), window['dataLayer'][_0x374954(0x190)]({
                                'event': 'DOODOO_SDK',
                                'action': _0x374954(0x230)
                            });
                        }
                    }, 0x64);
                }, _0x180800['adBlockerOn'] = !0x1, _0x180800[_0x46a6ad(0x185)] = !0x1, _0x180800['_skipVideo'] = !0x1;
                var _0x2673ec = new _0x180800();

                function _0x2b126b() {}
                window[_0x46a6ad(0x17a)] = _0x2673ec, window['gamebridge'] = (_0x2b126b[_0x46a6ad(0x1d4)][_0x46a6ad(0x184)] = function(_0x1f07ce, _0x24ee5c) {
                    var _0x4aa530 = _0x46a6ad;
                    _0x2673ec[_0x4aa530(0x212)](_0x24ee5c['name'], _0x4aa530(0x162) + _0x1f07ce), _0x24ee5c[_0x4aa530(0x1fc)](), _0x2673ec[_0x4aa530(0x165)]()[_0x4aa530(0x207)](function() {
                        var _0x1e7ae3 = _0x4aa530;
                        _0x24ee5c[_0x1e7ae3(0x1bf)]();
                    })[_0x4aa530(0x159)](function(_0x51d157) {
                        var _0x1129c9 = _0x4aa530;
                        _0x2673ec[_0x1129c9(0x212)](_0x24ee5c[_0x1129c9(0x18b)], _0x1129c9(0x182), {
                            'error': _0x51d157
                        }), _0x24ee5c[_0x1129c9(0x1bf)]();
                    });
                }, _0x2b126b[_0x46a6ad(0x1d4)][_0x46a6ad(0x164)] = function(_0x4200a3, _0x3fd64c, _0x1f331a) {
                    var _0x157b1f = _0x46a6ad;
                    _0x2673ec[_0x157b1f(0x1e6)]()[_0x157b1f(0x207)](function() {
                        var _0x53f98e = _0x157b1f;
                        _0x4200a3(), _0x1f331a({
                            'breakStatus': _0x53f98e(0x16e)
                        });
                    })['catch'](function(_0x1884cf) {
                        var _0x4b017a = _0x157b1f;
                        _0x3fd64c(), _0x1f331a({
                            'breakStatus': _0x4b017a(0x1b3)
                        });
                    });
                }, new _0x2b126b()), window[_0x46a6ad(0x1f8)] = {
                    'INTERSTITIAL_AD_SHOW_TIME': 1.5,
                    'REWARD_AD_SHOW_TIME': 0x6,
                    'hasWatched': !0x1,
                    'hhei': 0x34c,
                    'rwwid': 0x186,
                    'log': function() {
                        var _0x33c66a = _0x46a6ad;
                        for (var _0x3d7d82 = [], _0x58bce8 = 0x0; _0x58bce8 < arguments[_0x33c66a(0x1c6)]; _0x58bce8++) _0x3d7d82[_0x58bce8] = arguments[_0x58bce8];
                        console[_0x33c66a(0x22c)][_0x33c66a(0x160)](console, _0x465acd([_0x33c66a(0x1f8)], _0x3d7d82, !0x1));
                    },
                    'playInterstitial': function() {
                        var _0x229aea = _0x46a6ad;
                        _0x2673ec[_0x229aea(0x212)]('gameapi_playInterstitial'), _0x2673ec[_0x229aea(0x165)]();
                    },
                    'playReward': function(_0x61c19a) {
                        var _0x588e87 = _0x46a6ad;
                        _0x2673ec[_0x588e87(0x212)](_0x588e87(0x1eb)), _0x2673ec[_0x588e87(0x1e6)]()[_0x588e87(0x207)](function(_0x22e1df) {
                            _0x61c19a(_0x22e1df, '');
                        });
                    }
                }, window[_0x46a6ad(0x1e5)] = function() {
                    var _0x541c4e = _0x46a6ad;
                    for (var _0x3e57d0 = [], _0x2237e8 = 0x0; _0x2237e8 < arguments['length']; _0x2237e8++) _0x3e57d0[_0x2237e8] = arguments[_0x2237e8];
                    console[_0x541c4e(0x22c)][_0x541c4e(0x160)](console, _0x465acd([_0x541c4e(0x16b)], _0x3e57d0, !0x1));
                };
            },
            0x27a: (_0x41f0da, _0x120b0d, _0x220495) => {
                var _0xd09f31 = a0_0x4d85;
                Object['defineProperty'](_0x120b0d, _0xd09f31(0x233), {
                    'value': !0x0
                }), _0x120b0d[_0xd09f31(0x170)] = _0x120b0d['makeShareEvent'] = void 0x0;
                var _0x58901c, _0x3258be = _0x220495(0xc8),
                    _0x31be68 = [_0xd09f31(0x1a8), _0xd09f31(0x1c9), _0xd09f31(0x1cb)],
                    _0x596f5e = function() {
                        var _0x393867 = _0xd09f31;
                        (0x0, _0x3258be[_0x393867(0x1a2)])(_0x393867(0x1f5));
                    },
                    _0x4e0b43 = function() {
                        var _0x4f94f0 = _0xd09f31;
                        (0x0, _0x3258be[_0x4f94f0(0x1a2)])(_0x4f94f0(0x147));
                    },
                    _0x131419 = function() {
                        var _0x4b5f9d = _0xd09f31;
                        (0x0, _0x3258be[_0x4b5f9d(0x1a2)])(_0x4b5f9d(0x20b)), clearTimeout(_0x58901c);
                    },
                    _0x110651 = function() {
                        var _0x3c68bf = _0xd09f31,
                            _0x5dae8e;
                        (0x0, _0x3258be[_0x3c68bf(0x1a2)])(_0x3c68bf(0x17f)), _0x58901c = setTimeout(function() {
                            var _0x53d3e8 = _0x3c68bf;
                            (0x0, _0x3258be[_0x53d3e8(0x1a2)])(_0x53d3e8(0x16a)), _0x4e0b43();
                        }, 0x1f4), _0x5dae8e = {
                            'type': _0x3c68bf(0x179),
                            'value': _0x3c68bf(0x1e7)
                        }, _0x31be68[_0x3c68bf(0x19c)](function(_0x3df210) {
                            var _0x29151d = _0x3c68bf;
                            return window[_0x29151d(0x176)]['postMessage'](_0x5dae8e, _0x3df210);
                        });
                    };
                _0x120b0d[_0xd09f31(0x170)] = function() {
                    var _0x5b9595 = _0xd09f31;
                    (0x0, _0x3258be[_0x5b9595(0x1a2)])('loadEventListener'), window['addEventListener'](_0x5b9595(0x14a), function(_0x395033) {
                        var _0x39cf03 = _0x5b9595,
                            _0x59c3de; - 0x1 !== _0x31be68[_0x39cf03(0x186)](function(_0x31e978) {
                            var _0x3b7e25 = _0x39cf03;
                            return _0x31e978 === _0x395033[_0x3b7e25(0x204)];
                        }) && 'share-callback' === (null == (_0x59c3de = _0x395033[_0x39cf03(0x218)]) ? void 0x0 : _0x59c3de[_0x39cf03(0x235)]) && ((0x0, _0x3258be[_0x39cf03(0x1a2)])('receive\x20message', _0x59c3de), 'show' === (null == _0x59c3de ? void 0x0 : _0x59c3de[_0x39cf03(0x155)]) ? _0x131419() : _0x39cf03(0x215) === (null == _0x59c3de ? void 0x0 : _0x59c3de['value']) ? _0x4e0b43() : -0x1 !== [_0x39cf03(0x1c3), 'twitter', _0x39cf03(0x1c1), _0x39cf03(0x1ac), _0x39cf03(0x1f9), _0x39cf03(0x213), _0x39cf03(0x211)][_0x39cf03(0x186)](function(_0x1977cb) {
                            return _0x1977cb === ((null == _0x59c3de ? void 0x0 : _0x59c3de['value']) || '');
                        }) && setTimeout(_0x596f5e, 0x7d0));
                    });
                }, _0x120b0d[_0xd09f31(0x181)] = function(_0xa9c9b) {
                    _0x4e0b43 = function() {
                        var _0x27fd69 = a0_0x4d85;
                        (0x0, _0x3258be[_0x27fd69(0x1a2)])('failed\x20to\x20share'), _0xa9c9b(!0x1);
                    }, _0x596f5e = function() {
                        var _0x36f3f3 = a0_0x4d85;
                        (0x0, _0x3258be[_0x36f3f3(0x1a2)])('success\x20to\x20share'), _0xa9c9b(!0x0);
                    }, _0x110651(), setTimeout(function() {
                        return _0xa9c9b(!0x1);
                    }, 0x2710);
                };
            }
        },
        _0x289dfd = {};

    function _0x571563(_0x4b6061) {
        var _0x1608b8 = a0_0x4d85,
            _0x4ea6a8 = _0x289dfd[_0x4b6061];
        return void 0x0 !== _0x4ea6a8 || (_0x4ea6a8 = _0x289dfd[_0x4b6061] = {
            'exports': {}
        }, _0x18c17b[_0x4b6061][_0x1608b8(0x1f1)](_0x4ea6a8['exports'], _0x4ea6a8, _0x4ea6a8['exports'], _0x571563)), _0x4ea6a8['exports'];
    }
    _0x571563['d'] = (_0xa13395, _0x37c953) => {
        for (var _0x2af883 in _0x37c953) _0x571563['o'](_0x37c953, _0x2af883) && !_0x571563['o'](_0xa13395, _0x2af883) && Object['defineProperty'](_0xa13395, _0x2af883, {
            'enumerable': !0x0,
            'get': _0x37c953[_0x2af883]
        });
    }, _0x571563['o'] = (_0x49cc82, _0x19766a) => Object['prototype'][_0x24870f(0x193)][_0x24870f(0x1f1)](_0x49cc82, _0x19766a), _0x571563['r'] = _0x4cc436 => {
        var _0x176543 = _0x24870f;
        _0x176543(0x22a) != typeof Symbol && Symbol[_0x176543(0x1bd)] && Object['defineProperty'](_0x4cc436, Symbol[_0x176543(0x1bd)], {
            'value': _0x176543(0x201)
        }), Object[_0x176543(0x21a)](_0x4cc436, _0x176543(0x233), {
            'value': !0x0
        });
    }, _0x571563(0x25f);
})()));

function a0_0x4d85(_0x30f929, _0x323ebe) {
    var _0x391de0 = a0_0x391d();
    return a0_0x4d85 = function(_0x4d8517, _0xaf206b) {
        _0x4d8517 = _0x4d8517 - 0x143;
        var _0x50d74e = _0x391de0[_0x4d8517];
        return _0x50d74e;
    }, a0_0x4d85(_0x30f929, _0x323ebe);
}

function a0_0x391d() {
    var _0x52313e = ['adDismissed', 'div', '_config_adx', 'gameLoadingProgress', 'gameplayStop', '15ysXfkI', 'Ads\x20dismissed,\x20ad\x20has\x20been\x20closed,Resume\x20the\x20game\x20and\x20re-enable\x20sound.', 'value', 'src', ']\x20[', 'DooDooGameSdk::gameLoadingFinished', 'catch', 'relative', 'setVpaidMode', 'window\x20load', 'AdsLoader', '_initializeIMA', 'gtm-script', 'apply', 'settings', 'gamebridge_showAd_', 'NORMAL', 'showReward', 'commercialBreak', 'getError', 'AdsManagerLoadedEvent', 'CONTENT_PAUSE_REQUESTED', 'location', '[DOODOO]\x20share\x20not\x20supported', '[adToast]', 'innerHTML', 'adsManager', 'viewed', 'config', 'loadEventListener', 'VpaidMode', 'MY_CONSOLE_ERROR', 'no-cache', 'Ads\x20show\x20normally,ad\x20has\x20been\x20closed,Resume\x20the\x20game\x20and\x20re-enable\x20sound.', 'getURLParam', 'parent', 'script', 'afterAd', 'share-info', 'PokiSDK', 'destroyAd', 'data-ad-client', 'gtm-noscript', 'reward', '[DOODOO]\x20start\x20share', 'static', 'makeShareEvent', 'gamebridge_showAd_failed', 'rewardedBreak\x20result', 'showAd', 'isDebug', 'findIndex', 'round', 'happyTime', 'DooDooGameSdk::gameLoadingStart', 'text/javascript', 'name', 'adTagUrl', 'Player\x20dismissed\x20the\x20ad\x20before\x20completion.', 'getSettings', '91games', 'push', 'pubid', 'Ad\x20was\x20viewed\x20and\x20closed.', 'hasOwnProperty', 'isAdBlocked', 'split', 'adViewed', '//imasdk.googleapis.com/js/sdkloader/ima3.js', 'search', 'data-adbreak-test', 'async', '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\x27gtm.start\x27:\x0a\x20\x20new\x20Date().getTime(),event:\x27gtm.js\x27});var\x20f=d.getElementsByTagName(s)[0],\x0a\x20\x20j=d.createElement(s),dl=l!=\x27dataLayer\x27?\x27&l=\x27+l:\x27\x27;j.async=true;j.src=\x0a\x20\x20\x27https://www.googletagmanager.com/gtm.js?id=\x27+i+dl;f.parentNode.insertBefore(j,f);\x0a\x20\x20})(window,document,\x27script\x27,\x27dataLayer\x27,\x27GTM-WXGPQ5Q\x27);', 'forEach', 'track\x20game\x20error', 'constructor', 'https://service.pokigame.io/sdk/v1/track', 'DooDooGameSdk::skip\x20showing\x20ads', 'href', 'MY_CONSOLE_LOG', 'noscript', 'DooDooGameSdk::try\x20to\x20show\x20ads', 'doodoo\x20ads\x20not\x20ready', 'adSdk', 'display', 'http://127.0.0.1:3000', '2573746YqdWgA', 'block', 'AdsRequest', 'whatsapp', '<iframe\x20src=\x22https://www.googletagmanager.com/ns.html?id=GTM-WXGPQ5Q\x22\x0a\x20\x20\x20\x20height=\x220\x22\x20width=\x220\x22\x20style=\x22display:none;visibility:hidden\x22></iframe>', '1011780ttqtBo', '__spreadArray', 'DooDooGameSdk::commercialBreak', 'https://www.googletagservices.com/tag/js/gpt.js', 'is_adsense', 'notReady', 'position:absolute;left:0;top:0;width:100%;z-index:999;', 'adDisplayContainer', 'no-referrer', 'getMessage', '_config_adsense', 'ima', 'ImaSdkSettings', 'DooDooGameSdk::gameInteractive', 'other', 'toStringTag', 'position', 'adBreakDone', 'displayAd', 'pinterest', 'clientHeight', 'facebook', 'adsLoader', 'The\x20ad\x20starts\x20playing,\x20and\x20the\x20game\x20should\x20pause.', 'length', 'frequencyCapped', 'COMPLETE', 'https://doodoo-love.jojoywebtest.top', 'cors', 'https://doodoo.love', 'requestAds', '_insert_tagmanager', 'AD_ERROR', 'Type', 'doodoo_sdk_reward', 'pathname', 'adsRequest', 'startsWith', 'prototype', 'isReady', '2.1.1', '_get_ad_code', '_onAdsManagerLoaded', 'onload', 'DooDooGameSdk::gameplayStop', '63eKsTch', 'get', 'clientWidth', 'stringify', 'data-ad-client=ca-pub-3615084434427281,data-ad-channel=3118635668', 'rewardAd', 'linearAdSlotWidth', 'console', 'ori_ad_data', 'commercialBreakInterval', 'adToast', 'rewardedBreak', 'request', 'doodoo_sdk_interstitial', 'ViewMode', 'setDebug', 'gameapi_playReward', 'lastCommercialBreak', 'style', 'getComputedStyle', '11YwpCQD', 'vastLoadTimeout', 'call', 'error', '_play_adx_ad', 'breakStatus', '[DOODOO]\x20share\x20success', '326956UBiixR', 'gameLoadingFinished', 'gameapi', 'telegram', 'getAdsManager', 'resize', 'beforeAd', '32192sckxaY', 'adConfig', 'adBreak', 'dataLayer', 'Module', 'dismiss', 'DooDooGameSdk::try\x20to\x20show\x20reword\x20ads', 'origin', 'concat', 'head', 'then', 'interstitialAd\x20config', 'DooDooGameSdk::gameLoadingProgress', '11096030MuPgtF', '[DOODOO]\x20share\x20is\x20supported', 'POST', 'setAttribute', 'adContainer', 'start', '5nskcfh', 'copy', 'customEvent', 'success', 'DooDooGameSdk::displayAd', 'close', 'AdErrorEvent', 'failed', 'data', 'DOODOO_SDK', 'defineProperty', 'gpt-script', '1086BXKukw', 'https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-1474415292070496&slotname=doodoo-game-0726&ad_type=video_text_image&description_url=http%3A%2F%2Fdoodoo.love&min_ad_duration=0&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=click', '42222iYMTul', 'none', 'AdEvent', '_onAdError', 'getElementById', 'slice', 'unknown\x20error', 'DooDooGameSdk::init', 'body', 'DooDooGameSdk::rewardedBreak', 'data-ad-frequency-hint', 'appendChild', 'undefined', 'timeout', 'log', 'gameplayStart', 'is_loading', 'commercialBreak\x20result', 'trackGameError', 'DooDooGameSdk::destroyAd', 'addEventListener', '__esModule', 'initialize', 'type', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', 'now', 'createElement', 'gameInteractive', '30s', 'init', 'cssText', 'INSECURE', '[DOODOO]\x20share\x20failed', 'gameLoadingStart', 'ADS_MANAGER_LOADED', 'message', 'adx_callback', 'CONTENT_RESUME_REQUESTED', 'bind'];
    a0_0x391d = function() {
        return _0x52313e;
    };
    return a0_0x391d();
}