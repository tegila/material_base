// PK: 42EvDFt4KTG84dblNQ+Kgj8bv0H4T0+vWMJ0DXTFzLRFM4I06+/eoeOL8J1MbEwUD9Dm4KORNr5QBZDDhlp0ZQ==
db.Profiles.insertOne({
  user: "standard user",
  pubkeys: ["RTOCNOvv3qHji/CdTGxMFA/Q5uCjkTa+UAWQw4ZadGU="],
  restrictions: [{
    path: '.*',
    permission: ['r', 'w']
  }]
})
