$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Chat-main__message-info" data-message-id=${message.id}>
          <div class="Chat-main__message-list">
            <div class="main__message-user-name">
              ${message.user_name}
            </div>
            <div class="main__info-date">
              ${message.created_at}
            </div>
          </div>
          <div class="Main__message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Chat-main__message-info" data-message-id=${message.id}>
        <div class="Chat-main__message-list">
          <div class="main__message-user-name">
            ${message.user_name}
          </div>
          <div class="main__info-date">
            ${message.created_at}
          </div>
        </div>
        <div class="Main__message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Message__box').on('submit',function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message').append(html);
      $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});      
      $('form')[0].reset();
      $('.Message__submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    }); 
    return false;
  });
});