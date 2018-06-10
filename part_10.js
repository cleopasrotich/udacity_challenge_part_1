var facebookProfile = {
    name : "Cleopas Rotich",
    friends : 300,
    messages : ['Your pic is dope men','Happy 22th birthday'],
    addFriend : function(){
        facebookProfile.friends += 1;
    },
    removeFriend : function(){
        facebookProfile.friends -= 1;
    },
    postMessage : function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage : function(index){
        facebookProfile.messages.splice(index, 1);
    }

};
console.log(facebookProfile.postMessage("I like it"));
