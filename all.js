$( document ).ready(function() {
var list_status = 1;
//判斷目前頁面
var is_important = false;
//判斷目前編輯的item的星號狀態
var is_done = false;
//判斷目前編輯的item的完成狀態
var list_title = '';
var Deadline_date = '';
var Deadline_time = '';
var comment = '';
var todolist = JSON.parse(localStorage.getItem('todolist')) || [] ;
//從localStorage取得資料 如無資料則需定義為空陣列
var currentTodo = '';
//現在正在編輯的item
var isNew = false;
//判斷是否為new item 或是更新舊item
var currentEdit = '';
//現在編輯的item的index值


$("a").click(function(e){
    
    e.preventDefault()
})
//取消a元素預設行為

//刷新頁面Func
update()
function update(){
    var str = ''
    if (list_status == 1) {
        for (let i = 0;i<todolist.length;i++ )
        {
            str +=  
            `<li  draggable="true" data-index="${i}" class="d-flex flex-column ${todolist[i].important == true ?'important':''}">
            <div class=" d-flex justify-content-between">
                <div class="d-flex my-2">
                    <div data-index="${i}" style="display:${todolist[i].complete == false? 'block':'none'}" class="uncomplete align-self-center"></div>
                    <div data-index="${i}" style="display:${todolist[i].complete == true? 'block':'none'}" class="complete align-self-center">
                        <i class="fas fa-check"></i>
                    </div>
                    <input class="add_input ${todolist[i].complete == true ? 'done':''}" type="text" disabled  value="${todolist[i].title}" placeholder="Type Something Here...">
                </div>
                <div data-index="${i}" class="my-2 d-flex align-items-center important_group">
                    <a data-index="${i}" class="is_not_important" style="display:${todolist[i].important == false?'block':'none' }" href="#">
                        <i class="far fa-star header_btn "></i>
                    </a>
                    <a data-index="${i}" class="is_important" style="display:${todolist[i].important == true?'block':'none' }" href="#">
                        <i class="fas fa-star header_btn"></i>
                    </a>
                    <a data-index="${i}" class="edit_btn" href="#">
                        <i class="far fa-edit  header_btn"></i>
                    </a>
                </div>
            </div>
            <div class="list_sub_data">
                <i class="far fa-calendar-alt"></i>
                <span>${todolist[i].date}</span>
                <i class="far fa-file"></i>
                <span>12345.jpg</span>
                <i class="far fa-comment-dots"></i>
            </div>
        </li>`
        }
        $('.list_block').html(str)
    }
    else if (list_status == 2){
        for (let i = 0 ; i<todolist.length;i++){
           
            str +=  
            `<li  draggable="true" data-index="${i}" class=" flex-column ${todolist[i].complete == false ? 'd-flex':'d-none'}  ${todolist[i].important == true ?'important':''}">
            <div class=" d-flex justify-content-between">
                <div class="d-flex my-2">
                    <div data-done="" data-index="${i}" style="display:${todolist[i].complete == false? 'block':'none'}" class="uncomplete align-self-center"></div>
                    <div data-index="${i}" style="display:${todolist[i].complete == true? 'block':'none'}" class="complete align-self-center">
                        <i class="fas fa-check"></i>
                    </div>
                    <input class="add_input ${todolist[i].complete == true ? 'done':''}" type="text" disabled  value="${todolist[i].title}" placeholder="Type Something Here...">
                </div>
                <div data-index="${i}" class="my-2 d-flex align-items-center important_group">
                    <a data-index="${i}" class="is_not_important" style="display:${todolist[i].important == false?'block':'none' }" href="#">
                        <i class="far fa-star header_btn "></i>
                    </a>
                    <a data-index="${i}" class="is_important" style="display:${todolist[i].important == true?'block':'none' }" href="#">
                        <i class="fas fa-star header_btn"></i>
                    </a>
                    <a data-index="${i}" class="edit_btn" href="#">
                        <i class="far fa-edit  header_btn"></i>
                    </a>
                </div>
            </div>
            <div class="list_sub_data">
                <i class="far fa-calendar-alt"></i>
                <span>${todolist[i].date}</span>
                <i class="far fa-file"></i>
                <span>12345.jpg</span>
                <i class="far fa-comment-dots"></i>
            </div>
        </li>`
        }
        $('.list_block').html(str)
    }
    else if (list_status == 3) {
        
        for (let i = 0;i<todolist.length;i++){
            str +=  
            `<li  draggable="true" data-index="${i}" class=" ${todolist[i].complete == true ? 'd-flex':'d-none'} flex-column  ${todolist[i].important == true ?'important':''}">
            <div class=" d-flex justify-content-between">
                <div class="d-flex my-2">
                    <div data-index="${i}" style="display:${todolist[i].complete == false? 'block':'none'}" class="uncomplete align-self-center"></div>
                    <div data-index="${i}" style="display:${todolist[i].complete == true? 'block':'none'}" class="complete align-self-center">
                        <i class="fas fa-check"></i>
                    </div>
                    <input class="add_input ${todolist[i].complete == true ? 'done':''}" type="text" disabled  value="${todolist[i].title}" placeholder="Type Something Here...">
                </div>
                <div data-index="${i}" class="my-2 d-flex align-items-center important_group">
                    <a data-index="${i}" class="is_not_important" style="display:${todolist[i].important == false?'block':'none' }" href="#">
                        <i class="far fa-star header_btn "></i>
                    </a>
                    <a data-index="${i}" class="is_important" style="display:${todolist[i].important == true?'block':'none' }" href="#">
                        <i class="fas fa-star header_btn"></i>
                    </a>
                    <a data-index="${i}" class="edit_btn" href="#">
                        <i class="far fa-edit  header_btn"></i>
                    </a>
                </div>
            </div>
            <div class="list_sub_data">
                <i class="far fa-calendar-alt"></i>
                <span>${todolist[i].date}</span>
                <i class="far fa-file"></i>
                <span>12345.jpg</span>
                <i class="far fa-comment-dots"></i>
            </div>
        </li>`
       
        }
        $('.list_block').html(str)
        
    }
    
    
}





//監聽list_block完成拖曳行為,這邊使用了單元素綁定多行為的方式


$(".list_block").on({
    //拖曳行為開始
    "dragstart":function(e){
        var index = $(e.target).index()
        e.dataTransfer = e.originalEvent.dataTransfer;
        e.dataTransfer.setData('text/plain', index)
        //dataTransfer為托放行為專用物件  setData(數據類型為text/plain 或是 uri-list)
    },
    //拖曳行為結束
    "drop":function(e){
        console.log('drop!')
        
e.dataTransfer = e.originalEvent.dataTransfer;
  let oldIndex = e.dataTransfer.getData('text/plain')
  //取得原本位置的index
  let target = $(e.currentTarget)
  
  let newIndex = target.index()
  //取得新的位置的index
 
  
  
  let dropped = $(this).parent().children().eq(oldIndex).remove()
  //移除舊Dom元素
  
  if (newIndex < oldIndex) {
    target.before(dropped)
  } else {
    target.after(dropped)
  }
  //插入新的Dom元素
  var new_index = []
  var the_new_todolist = []
  $(".list_block li").each(function (index) {
      console.log($(this).index())
      console.log($(this).data('index'))
      
    new_index.push($(this).data('index'))  
  })

  console.log(new_index)
  
  for(let i = 0;i<todolist.length;i++){
      the_new_todolist.push(todolist[i].dataset('index'))
  }
   console.log(the_new_todolist)
 
    },
    "dragenter":function(e){
        
        e.preventDefault()
        e.stopPropagation()
        return false
    },
    "dragover":function(e){
        e.preventDefault()
        e.stopPropagation()
        return false
    }
},'li');


//監聽整個list_block並利用事件委託把行為寫在list_block下的元素行為委託給list_block

//點擊星號切換狀態並即時更新資料
$(".list_block").on('click','.is_not_important',function(){
    console.log('click')
    var i = $(this).data('index')
    console.log($(this))
    todolist[i].important = true;
    localStorage.setItem('todolist',JSON.stringify(todolist))
    update();
})

$(".list_block").on('click','.is_important',function(){
    console.log('click')
    var i =  $(this).data('index')    
    todolist[i].important = false;
    localStorage.setItem('todolist',JSON.stringify(todolist))
    update();
})

//點擊完成方塊切換並即時更新狀態
$(".list_block").on('click','.uncomplete',function(){
     var i = $(this).data('index')
    todolist[i].complete = true;
    localStorage.setItem('todolist',JSON.stringify(todolist))
    update();
})

$(".list_block").on('click','.complete',function(){
    var i = $(this).data('index')
   todolist[i].complete = false;
   localStorage.setItem('todolist',JSON.stringify(todolist))
   update();
})



//點擊編輯按鈕並把item資料傳給上方編輯區塊
$(".list_block").on('click','.edit_btn',function(){
    
    isNew = false;
    //是否是新元素? false
    $('.add_task_btn').hide()
    currentEdit = $(this).data('index')
    //取得點擊的item index
    $(this).children('.fa-edit').addClass("active").parents('li').siblings().find('.fa-edit').removeClass('active')
    //移除其他編輯按鈕的active



    $('.new_todo_block').addClass('d-flex')
    //開啟編輯區塊

    if (todolist[currentEdit].complete == false){
        $('.done').eq(0).removeClass('d-none')
        $('.done').eq(1).addClass('d-none')
    }
    else if (todolist[currentEdit].complete == true){
      $('.done').eq(1).removeClass('d-none')
      $('.done').eq(0).addClass('d-none')
   }
    //取得現在item的完成狀態
    
  
   $('#add_header .add_input').val(todolist[currentEdit].title)
   $('#Deadline_content input').eq(0).val(todolist[currentEdit].date)
   $('#Deadline_content input').eq(1).val(todolist[currentEdit].time)
   $('#Comment_content textarea').val(todolist[currentEdit].listComment)
   //以上分別把值傳進編輯區塊
   $('.add_footer a').eq(1).html('<i class="fas fa-plus"></i>Update')
   //修改按鈕文本為Update
   if(todolist[currentEdit].important == false){
       $('.star').eq(0).removeClass('d-none')
       $('.star').eq(1).addClass('d-none')
       $('.new_todo_block #add_header').removeClass('important')
       
   }
   else if(todolist[currentEdit].important == true){
    $('.star').eq(1).removeClass('d-none')
    $('.star').eq(0).addClass('d-none')
    $('.new_todo_block #add_header').addClass('important')
}
  //取得現在item的星號狀態
})



//最上方切換item列表區塊
$(".header a").click(function(){
  list_status = $(this).data('task')
  //取得現在頁面的list_status  1為all 2為Progess 3為complete
  if (list_status == 1 && $('.new_todo_block').hasClass('d-flex')) {
      return
  }
  //如頁面已經是all 防止再次點擊而造成刷新頁面
  $(this).addClass('active').siblings('a').removeClass('active')
  //增加active給目前點擊的按鈕並移除其他按鈕的
  $('.new_todo_block').addClass('d-none').removeClass('d-flex')
  //切換list_status的狀態自動時收起編輯區塊
  if (list_status == 1){
       update()
       $('.add_task_btn').show()
  }
  else if (list_status == 2 ){
      $('.add_task_btn').hide()
      update()
  }
  else if (list_status == 3) {
      $('.add_task_btn').hide()
      update()
  }
  //預設只有all時開啟新增task的按鈕

})

//當新增Tsak的input為focus時開啟
$('.add_task_btn').focus(function(){
    isNew = true;
    //使否是新item ? true
    $('.done').eq(0).removeClass('d-none')
    $('.done').eq(1).addClass('d-none')
    is_done = false
     //設定完成狀態為false
    $('.star').eq(0).removeClass('d-none')
    $('.star').eq(1).addClass('d-none')
    is_important = false
    //設定重要狀態為false
    $('.new_todo_block #add_header').removeClass('important')
    //移除重要狀態的class .important
    $('.new_todo_block').addClass('d-flex').removeClass('d-none')
    //開啟編輯區塊
    $('.add_task_btn').hide()
    //新增Task按鈕遮蔽
    // $('.new_todo_block').addClass('d-flex')

    $('#add_header .add_input').val('')
    $('#Deadline_content input').eq(0).val('')
    $('#Deadline_content input').eq(1).val('')
    $('#Comment_content textarea').val('')
    //設定各項目為空值
    $('.add_footer a').eq(1).html('<i class="fas fa-plus"></i>Add Task')
    //更新文本為Add Task
    
})

//現在正在編輯的item的important狀態控制
$('.add_header .star').click(function(){
    $(this).addClass('d-none').siblings('a').removeClass('d-none')
    if ($(this).data('star') == 0 ){
     is_important = true
     $(this).closest('.add_header').addClass('important')
    }
    else {
        $(this).closest('.add_header').removeClass('important')
        is_important = false
     } 
 })

//現在正在編輯的item的complete狀態控制
$('.add_header .done').click(function(){
    $(this).addClass('d-none').siblings('div').removeClass('d-none')
    if ($(this).data('done') == 0){
        is_done = false
    }
    else {
        is_done = true
    }
})




//cancel_add
$('.add_footer a').eq(0).click(function(){
    $('.new_todo_block').addClass('d-none').removeClass('d-flex')
    $('.add_task_btn').show()
    if (list_status == 2 || list_status== 3){
        $('.add_task_btn').hide()
    }
   update()
})

//add_task & update
$('.add_footer a').eq(1).click(function(){
    if  (isNew == true ){
        //如果是新增item
        list_title = $('.add_input').val()
        Deadline_date =  $('#Deadline_content input').eq(0).val()
        Deadline_time = $('#Deadline_content input').eq(1).val()
        comment = $('#Comment_content textarea').val()
        //設定新item 各項目資料為目前編輯區塊中的value值
        currentTodo = {title:list_title,date:Deadline_date,time:Deadline_time,listComment:comment,important:is_important,complete:is_done }
        //存進currentTodo
        todolist.push(currentTodo)
        //傳進todolist
        localStorage.setItem('todolist',JSON.stringify(todolist))
        //並同時把資料傳進localStorge
        update()
        $('.new_todo_block').addClass('d-none').removeClass('d-flex')
        $('.add_task_btn').show()
    }
    else if (isNew == false){
        //如果是更新現有item
        $('.done').each(function(){
            if($(this).hasClass('d-none')){
                todolist[currentEdit].complete = !$(this).data('complete')
                console.log(todolist[currentEdit].complete)
            }
         })
        //把目前編輯區塊中的complete狀態傳進正在編輯item並修改資料
        todolist[currentEdit].title = $('#add_header .add_input').val() 
        todolist[currentEdit].date =  $('#Deadline_content input').eq(0).val()
        todolist[currentEdit].time =  $('#Deadline_content input').eq(1).val()
        todolist[currentEdit].listComment = $('#Comment_content textarea').val()
        //把目前編輯區塊中的各項狀態傳進正在編輯的item並修改資料
        $('.star').each(function(){
           if($(this).hasClass('d-none')){
               todolist[currentEdit].important = !$(this).data('star')
               console.log(todolist[currentEdit].important)
           }
        })
        //把目前編輯區塊中的important狀態傳進正在編輯item並修改資料
        localStorage.setItem('todolist',JSON.stringify(todolist))
        //同步更新資料到localStorge裡
        update()
        //刷新頁面
        $('.new_todo_block').addClass('d-none').removeClass('d-flex')
        $('.add_task_btn').show()
        if (list_status == 2 || list_status == 3 ){
            $('.add_task_btn').hide()
        }
        //關閉編輯區塊並開啟新增按鈕
    }
    
 })



});

//2020/04/12