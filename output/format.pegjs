{
   let mapping = {
      "^": "bigger",
      "~": "smaller",
      "*": "bold",
      "%": "italic",
      "_": "underline",
      "-": "strikethrough",
      "#": "spoiler",
      "+": "shake",
      "@": "spooky",
      "`": "normalize",
      "!": "rainbow",
    };
}

/*
tests:

#peachpufftp://www.example.com:8080/-._~:[]@!$&'()*+,;=image.png

$ !~~~!valid font name|||#redhttp://vimeo.com/0

#00000http://vimeo.com/*#yellowgree.svg

every/~teal/_teal/^/^/^teal||/@teal/-teal/+teal|||/*teal/%teal/#teal/!teal|||style|||||||||||||

>mfw >>0000 is valid quote

###red##fffff#cyan >implying this is green

<script>
alert(alert)
</script>
*/

all
  = t:term* endMarker* { return t; }

term
  = link / font / colors / effect / text

link
  = link:(linkProtocol "://" linkURI) {
    return {
      type: "link",
      link: link.join(""),
    }
  }

linkProtocol
  = protocol:([A-Za-z]+) {
    return protocol.join("");
  }

linkURI
  = chars:([A-Za-z0-9\-+._~:\/?#\[\]@!$&'()*,;=]+) {
    return chars.join("");
  }

font
  = fontStart name:fontName fontEnd target:(term*) {
    return {
      type: "font",
      name: name,
      target: target,
    };
  }

fontStart
  = "$"

fontName
  = chars:[A-Za-z ]+ {
    return chars.join("");
  }

fontEnd
  = "|"

colors
  = bgColor / textColor

textColor
  = textColorStart color:color target:(term*) {
    return {
      type: "textColor",
      color: color,
      target: target,
    };
  }

textColorStart
  = "#"

color
  = colorText / colorHex

colorText
  = "yellowgreen" / "yellow" / "whitesmoke" / "white" / "wheat"
  / "violet" / "turquoise" / "tomato" / "thistle" / "teal" / "tan"
  / "steelblue" / "springgreen" / "snow" / "slategray" / "slateblue"
  / "skyblue" / "silver" / "sienna" / "seashell" / "seagreen"
  / "sandybrown" / "salmon" / "saddlebrown" / "royalblue" / "rosybrown"
  / "red" / "rebeccapurple" / "purple" / "powderblue" / "plum" / "pink"
  / "peru" / "peachpuff" / "papayawhip" / "palevioletred"
  / "paleturquoise" / "palegreen" / "palegoldenrod" / "orchid"
  / "orangered" / "orange" / "olivedrab" / "olive" / "oldlace"
  / "navy" / "navajowhite" / "moccasin" / "mistyrose" / "mintcream"
  / "midnightblue" / "mediumvioletred" / "mediumturquoise"
  / "mediumspringgreen" / "mediumslateblue" / "mediumseagreen"
  / "mediumpurple" / "mediumorchid" / "mediumblue" / "mediumaquamarine"
  / "maroon" / "magenta" / "linen" / "limegreen" / "lime" / "lightyellow"
  / "lightsteelblue" / "lightslategray" / "lightskyblue" / "lightseagreen"
  / "lightsalmon" / "lightpink" / "lightgreen" / "lightgray"
  / "lightgoldenrodyellow" / "lightcyan" / "lightcoral" / "lightblue"
  / "lemonchiffon" / "lawngreen" / "lavenderblush" / "lavender" / "khaki"
  / "ivory" / "indigo" / "indianred" / "hotpink" / "honeydew"
  / "greenyellow" / "green" / "gray" / "goldenrod" / "gold" / "ghostwhite"
  / "gainsboro" / "fuchsia" / "forestgreen" / "floralwhite" / "firebrick"
  / "dodgerblue" / "dimgray" / "deepskyblue" / "deeppink" / "darkviolet"
  / "darkturquoise" / "darkslategray" / "darkslateblue" / "darkseagreen"
  / "darksalmon" / "darkred" / "darkorchid" / "darkorange" / "darkolivegreen"
  / "darkmagenta" / "darkkhaki" / "darkgreen" / "darkgray" / "darkgoldenrod"
  / "darkcyan" / "darkblue" / "cyan" / "crimson" / "cornsilk" / "cornflowerblue"
  / "coral" / "chocolate" / "chartreuse" / "cadetblue" / "burlywood" / "brown"
  / "blueviolet" / "blue" / "blanchedalmond" / "black" / "bisque" / "beige"
  / "azure" / "aquamarine" / "aqua" / "antiquewhite" / "aliceblue"

// TODO: "hex" only once
colorHex
  = chars:((hex hex hex hex hex hex)
  / (hex hex hex)) {
      return chars.join("");
    }

bgColor
  = bgColorStart color:color target:(term*) {
    return {
      type: "bgColor",
      color: color,
      target: target,
    };
  }

bgColorStart
  = "##"

effect
  = effectStart type:effectMarker target:(term*) effectEnd? {
      return {
        type: mapping[type],
        target: target,
      };
    }

effectStart
  = "/"

effectMarker
  = marker:(char:. & { return char in mapping } {return char;}) {
      return marker;
    }

effectEnd
  = endMarker

text
  = chars:((!effect !colors char:. {return char})+) {
      return {
        type: "text",
        target: chars.join(""),
      };
    }

endMarker
  = "|"

hex
  = [A-Fa-f0-9]

_ "whitespace"
  = [ \t\n\r]*
