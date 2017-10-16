{
    "_": "", 
    "buttons": {
        "A": {
            "action": "button(Keys.BTN_GAMEPAD)"
        }, 
        "B": {
            "action": "button(Keys.BTN_EAST)"
        }, 
        "BACK": {
            "action": "button(Keys.BTN_SELECT)"
        }, 
        "C": {
            "action": "menu('Default.menu')", 
            "doubleclick": {}, 
            "hold": {
                "action": "menu('Default.menu')"
            }
        }, 
        "LB": {
            "action": "button(Keys.BTN_TL)"
        }, 
        "RB": {
            "action": "button(Keys.BTN_TR)"
        }, 
        "RPAD": {
            "action": "button(Keys.BTN_LEFT)"
        }, 
        "START": {
            "action": "button(Keys.BTN_START)"
        }, 
        "X": {
            "action": "button(Keys.BTN_NORTH)"
        }, 
        "Y": {
            "action": "button(Keys.BTN_WEST)"
        }
    }, 
    "gyro": {}, 
    "is_template": false, 
    "menus": {}, 
    "pad_left": {
        "X": {
            "action": "axis(Axes.ABS_X)"
        }, 
        "Y": {
            "action": "raxis(Axes.ABS_Y)"
        }, 
        "feedback": ["LEFT", 4096, 16.0], 
        "name": "Stick"
    }, 
    "pad_right": {
        "X": {
            "action": "axis(Axes.ABS_RX)"
        }, 
        "Y": {
            "action": "raxis(Axes.ABS_RY)"
        }, 
        "feedback": ["RIGHT", 256], 
        "name": "Stick2", 
        "smooth": [8, 0.78, 2.0]
    }, 
    "stick": {
        "dpad": [{
            "action": "button(Keys.KEY_UP)"
        }, {
            "action": "button(Keys.KEY_DOWN)"
        }, {
            "action": "button(Keys.KEY_LEFT)"
        }, {
            "action": "button(Keys.KEY_RIGHT)"
        }]
    }, 
    "trigger_left": {
        "action": "axis(Axes.ABS_Z)", 
        "levels": [50, 255]
    }, 
    "trigger_right": {
        "action": "axis(Axes.ABS_RZ)", 
        "levels": [50, 255]
    }, 
    "version": 1.2
}