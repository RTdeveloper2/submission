getGridInput(params)
{
    let cursor = this.nextcursor;
    const {startrow,endRow} = parms.request;
    const pageSize = endRow - startrow;
    let input={
        "page" : {
            "cursor" : cursor,
            "limit" : pageSize
        }
    }
}
show(value,action,vent)
{try{
    const element = vent?.currentTarget.getBoundingClientRect();
    const innertext = action === "sjojas" ? "sddss" : "";
  const obj = {
    isXoffset : true,
    widthoffset : 200
  }

  const tooltipconfig = this.utilservice.gettollconfig(element,innertext,value,obj)
  this.tooltipcomponent.createtooltip(tooltipconfig);
}
catch(e){
    this.handleException(e);
}
}

hello(data)
{
    this.service.open({data},panelComponent);
}

let a = {
    sigDetails : [{
        payload: "dssdsd",
        sType: "ds",
        sSource: "car",
        lUpdated : "24434324"
    },
    {
        payload: "dssdsd",
        sType: "ds",
        sSource: "car",
        lUpdated : "24434324"
    },{
        payload: "dssdsd",
        sType: "bidske",
        sSource: "bike",
        lUpdated : "24434324"
    },{
        payload: "dssdsd",
        sType: "bidske",
        sSource: "bike",
        lUpdated : "24434324"
    },{
        payload: "dssdsd",
        sType: "trudsck",
        sSource: "truck",
        lUpdated : "24434324"
    },{
        payload: "dssdsd",
        sType: "sdd",
        sSource: "truck",
        lUpdated : "24434324"
    }]
}



let b = {
    sigDetails:[{
        signals:[{
            details:[{
                payload: "dssdsd",
                sType: "ds",
                sSource: "car",
                lUpdated : "24434324"
            },
            {
                payload: "dssdsd",
                sType: "ds",
                sSource: "car",
                lUpdated : "24434324"
            }],
        type: "car"
        }
    ]
},{
    signals:[{
        details:[{
            payload: "dssdsd",
            sType: "bidske",
            sSource: "bike",
            lUpdated : "24434324"
        },{
            payload: "dssdsd",
            sType: "bidske",
            sSource: "bike",
            lUpdated : "24434324"
        }],
    type: "bike"
    }
]
},
{
    signals:[{
        details:[{
            payload: "dssdsd",
            sType: "trudsck",
            sSource: "truck",
            lUpdated : "24434324"
        },{
            payload: "dssdsd",
            sType: "sdd",
            sSource: "truck",
            lUpdated : "24434324"
        }],
    type: "truck"
    }
]
}
]}


let a = {
    sigDetails : [{
        payload: "dssdsd",
        sType: "ds",
        sSource: "car",
        lUpdated : "24434324"
    },
    {
        payload: "dssdsd",
        sType: "ds",
        sSource: "car",
        lUpdated : "24434324"
    },{
        payload: "dssdsd",
        sType: "bidske",
        sSource: "bike",
        lUpdated : "24434324"
    },{
        payload: "dssdsd",
        sType: "bidske",
        sSource: "bike",
        lUpdated : "24434324"
    },{
        payload: "dssdsd",
        sType: "trudsck",
        sSource: "truck",
        lUpdated : "24434324"
    },{
        payload: "dssdsd",
        sType: "sdd",
        sSource: "truck",
        lUpdated : "24434324"
    }]
}



let b = {
    sigDetails:[{
        signals:[{
            details:[{
                payload: "dssdsd",
                sType: "ds",
                sSource: "car",
                lUpdated : "24434324"
            },
            {
                payload: "dssdsd",
                sType: "ds",
                sSource: "car",
                lUpdated : "24434324"
            }],
        type: "car"
        }
    ]
},{
    signals:[{
        details:[{
            payload: "dssdsd",
            sType: "bidske",
            sSource: "bike",
            lUpdated : "24434324"
        },{
            payload: "dssdsd",
            sType: "bidske",
            sSource: "bike",
            lUpdated : "24434324"
        }],
    type: "bike"
    }
]
},
{
    signals:[{
        details:[{
            lUpdated : "24434324",
            payload: "dssdsd",
            sType: "trudsck",
            sSource: "truck",
        },{
            lUpdated : "24434324",
            payload: "dssdsd",
            sType: "sdd",
            sSource: "truck"
        }],
    type: "truck"
    }
]
}
]}


       