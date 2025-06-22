(function(doc, win) {
    
    const Lib = {
        select: function(seletor) {
            return document.querySelector(seletor);
        }
    }

    win.Lib = Lib
    
})(document, window)
