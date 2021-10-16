const index = require("./index")
// @ponicode
describe("index.addQuery", () => {
    test("0", () => {
        let callFunction = () => {
            index.addQuery("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.addQuery(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.collect", () => {
    test("0", () => {
        let callFunction = () => {
            index.collect()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.changeArticle", () => {
    test("0", () => {
        let callFunction = () => {
            index.changeArticle("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.changeArticle("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.changeArticle("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.changeArticle("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.changeArticle("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.changeArticle(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.changeFontSize", () => {
    test("0", () => {
        let callFunction = () => {
            index.changeFontSize(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.changeFontSize(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.changeFontSize(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.changeFontSize(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.changeBgColor", () => {
    test("0", () => {
        let callFunction = () => {
            index.changeBgColor(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.changeBgColor(3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.changeBgColor(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.changeBgColor(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.changeBgColor(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.switchThemeModel", () => {
    test("0", () => {
        let callFunction = () => {
            index.switchThemeModel()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.switchStylesModalState", () => {
    test("0", () => {
        let callFunction = () => {
            index.switchStylesModalState({})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.switchStylesModalState(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.hideSplash", () => {
    test("0", () => {
        let callFunction = () => {
            index.hideSplash()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.showSplash", () => {
    test("0", () => {
        let callFunction = () => {
            index.showSplash()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.todayArticle", () => {
    test("0", () => {
        let callFunction = () => {
            index.todayArticle()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.preArticle", () => {
    test("0", () => {
        let callFunction = () => {
            index.preArticle()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.nextArticle", () => {
    test("0", () => {
        let callFunction = () => {
            index.nextArticle()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.randomArticle", () => {
    test("0", () => {
        let callFunction = () => {
            index.randomArticle()
        }
    
        expect(callFunction).not.toThrow()
    })
})
