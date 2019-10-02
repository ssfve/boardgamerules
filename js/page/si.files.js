// STYLING FILE INPUTS 1.0 | Shaun Inman <http://www.shauninman.com/> | 2007-09-07
if (!window.SI) {
	let SI = {};
    SI.Files =
        {
            htmlClass: 'SI-FILES-STYLIZED',
            fileClass: 'file',
            wrapClass: 'cabinet',

            fini: false,
            able: false,
            init: function () {
                this.fini = true;

                let ie = 0; //@cc_on + @_jscript_version
                // no support for opera
                if ((ie && ie < 5.5) || !document.getElementsByTagName) {
                    return;
                } // no support for opacity or the DOM
                this.able = true;

                let html = document.getElementsByTagName('html')[0];
            },

            stylize: function (elem) {
                if (!this.fini) {
                    this.init();
                }
                if (!this.able) {
                    return;
                }

                elem.parentNode.file = elem;
                elem.parentNode.onmousemove = function (e) {
                    if (typeof e == 'undefined') e = window.event;
                    if (typeof e.pageY == 'undefined' && typeof e.clientX == 'number' && document.documentElement) {
                        e.pageX = e.clientX + document.documentElement.scrollLeft;
                        e.pageY = e.clientY + document.documentElement.scrollTop;
                    }

                    let ox = 0;
                    let oy = 0;
                    let elem = this;
                    if (elem.offsetParent) {
                        ox = elem.offsetLeft;
                        oy = elem.offsetTop;
                        while (elem = elem.offsetParent) {
                            ox += elem.offsetLeft;
                            oy += elem.offsetTop;
                        }
                    }

                    let x = e.pageX - ox;
                    let y = e.pageY - oy;
                    let w = this.file.offsetWidth;
                    let h = this.file.offsetHeight;

                    this.file.style.top = y - (h / 2) + 'px';
                    this.file.style.left = x - (w - 30) + 'px';
                };
            },

            stylizeById: function (id) {
                this.stylize(document.getElementById(id));
            }

        };
	SI.Files.stylizeById('bg_img_file');
}
