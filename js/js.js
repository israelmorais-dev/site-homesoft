function openTab(event, idTab){
    var  content = document.getElementsByClassName('contents')
    for (var i = 0; i < content.length; i++){
        content[i].style.display = 'none';
    }
    document.getElementById(idTab).style.display = 'block';
    event.currentTarget.className = 'active';
}
