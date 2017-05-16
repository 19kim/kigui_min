/**
 * Created by kimig on 2017-05-11.
 */
window.addEventListener("DOMContentLoaded", function() {
    if (kigui.pages.header.msg.close.get() !== null)
        kigui.pages.header.msg.close.get().addEventListener('click', function() {
            kigui.pages.header.msg.hide();
        });
});


var kigui =
    {
        pages :
            {
                header :
                    {
                        msg :
                            {
                                text : {
                                    element : null,
                                    get : function() {
                                        if (this.element === null)
                                            this.element = document.querySelector('.kigui-p-h-m-t');

                                        return this.element;
                                    },
                                    setText : function(text) {
                                        var elem = kigui.pages.header.msg.text.get();
                                        if (elem !== null)
                                            elem.innerText = text;
                                    }
                                },//text 끝
                                close : {
                                    element : null,
                                    get : function() {
                                        if (this.element === null)
                                            this.element = document.querySelector('.kigui-p-h-m-c');

                                        return this.element;
                                    },

                                },//close 끝
                                code : '',
                                element : null,
                                get : function() {
                                    if (this.element === null)
                                        this.element = document.querySelector('.kigui-p-h-m');

                                    return this.element;
                                },
                                // printMsg : function(msg, bgcolor) {
                                //     var div = document.createElement('div');    //msg 객체
                                //     var text = document.createElement('div');   //msg안 텍스트
                                //     var empty = document.createElement('div');  //빈 공간
                                //
                                //     //클래스 지정
                                //     div.classList.add('kigui-p-h-m');
                                //     text.classList.add('kigui-p-h-m-t');
                                //     empty.classList.add('kigui-p-o-m');
                                //
                                //     //내용 대입
                                //     text.innerText = msg;
                                //
                                //     //색상 대입
                                //     if (bgcolor !== null)
                                //        div.style.backgroundColor = bgcolor;
                                //
                                //     div.appendChild(text);
                                //     kigui.pages.header.get().appendChild(div);
                                // },
                                show : function() {
                                    var msg = this.get();

                                    if (msg !== null)
                                    {
                                        msg.classList.add('kigui-p-h-m_o');
                                    }

                                    if (kigui.pages.header.get().classList.contains('kigui-p-h_f'))
                                    {
                                        kigui.pages.others.msg.get().classList.add('kigui-p-h-m_o');
                                    }
                                },
                                hide : function() {
                                    var msg = this.get();

                                    if (msg !== null)
                                    {
                                        msg.classList.remove('kigui-p-h-m_o');
                                    }

                                    if (kigui.pages.header.get().classList.contains('kigui-p-h_f'))
                                    {
                                        kigui.pages.others.msg.get().classList.remove('kigui-p-h-m_o');
                                    }

                                    if(typeof(Storage) !== 'undefined') {
                                        localStorage.setItem('msgCode', kigui.pages.header.msg.code);
                                    }
                                },
                                toggle : function() {
                                    var msg = this.get();

                                    if (msg !== null)
                                        msg.classList.toggle('kigui-p-h-m_o');
                                    // msg.classList.contains('kigui-p-h-m_o') ? this.close() : this.show();
                                },
                                setCode : function(string) {
                                    this.code = string;
                                },
                                getCode : function() {
                                    return this.code;
                                },
                                loadCode : function() {
                                    return localStorage.getItem('msgCode');
                                },
                                isNewMsg : function() {
                                    return (this.getCode() !== this.loadCode());
                                },
                                init : function(text, code) {
                                    this.text.setText(text);
                                    this.setCode(code);
                                },
                            },
                        element : null,
                        get : function() {
                            if (this.element === null)
                                this.element = document.querySelector('.kigui-p-h');

                            return this.element;
                        }
                    },
                sidemenu : {
                    element : null,
                    get : function() {
                        if (this.element === null)
                            this.element = document.querySelector('.kigui-p-s');

                        return this.element;
                    },
                    show : function() {
                        this.get().classList.add('kigui-p-s_o');
                    },
                    hide : function() {
                        this.get().classList.remove('kigui-p-s_o');
                    }
                },
                others : {
                    msg : {
                        element : null,
                        get : function() {
                            if (this.element === null)
                                this.element = document.querySelector('.kigui-p-o-m');

                            return this.element;
                        }
                    },
                    element : null,
                    get : function() {
                        if (this.element === null)
                            this.element = document.querySelector('.kigui-p-o');

                        return this.element;
                    }
                },
                setShadow : function(state) {
                    state ? this.get().classList.add('kigui-p-h_s') : this.get().classList.remove('kigui-p-h_s');
                },
                setFixed : function(state) {
                    state ? this.get().classList.add('kigui-p-h_f') : this.get().classList.remove('kigui-p-h_f');
                }
            }
    }