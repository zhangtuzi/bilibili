
$(function(){
// 返回按钮和我知道了按钮、填写邮寄地址按钮
  $('.backBtn,.knoweBtn,.txyjdzBtn').click(function(){
    $('.tc_divs,.mc_bg').hide();
  })

  // 领奖须知按钮
  $('.cjgz_btn').click(function(){
      var win_height=$(window).height();
    $('.sweepstake_gz_nr').css('max-height',win_height-260);
    $('.sweepstake_gz_nr1').css('max-height',win_height-250);
    var sweepstake_gz_height=$('.sweepstake_gz_tc .tc_warpD').height();
    $('.sweepstake_gz_tc').css('margin-top',-(win_height-80)/2);
    $('.sweepstake_gz_tc,.mc_bg').show();
  })

  // 去抽奖按钮
  $('.sweepstakeBtn').click(function(){
    $('.sweepstake_tc,.mc_bg').show();
  })
  // 点我开启按钮
  $('.djkqBtn,.gift_boxPic').click(function(){
    var kqi=Math.random();
    if(kqi<0.3){//实物
      var sw_height=$('.sw_jp_tc').height();
      $('.sw_jp_tc').css('margin-top',-sw_height/2);
      $('.sweepstake_tc').hide();
      $('.sw_jp_tc').show();
    }else if(kqi<0.5){//虚拟
      var xn_height=$('.xn_jp_tc').height();
      $('.xn_jp_tc').css('margin-top',-xn_height/2);
      $('.sweepstake_tc').hide();
      $('.xn_jp_tc').show();
    }else{//异常
      var error_height=$('.error_tc').height();
      $('.error_tc').css('margin-top',-error_height/2);
      $('.sweepstake_tc').hide();
      $('.error_tc').show();
    }
  })
gift_flash();
  function gift_flash(){
    var gift_i=0;
      setInterval(function(){
      switch (gift_i%32){
          case 0:
          $('.gift_boxPic').css({
             'top':'-0.01rem',
            'transform':'rotate(3deg)'
          },50);
          break;
          case 1:
          $('.gift_boxPic').css({
             'top':'-0.02rem',
            'transform':'rotate(6deg)'
          },50);
          break;
          case 2:
          $('.gift_boxPic').css({
             'top':'-0.03rem',
            'transform':'rotate(9deg)'
          },50);
          break;
          case 3:
          $('.gift_boxPic').css({
             'top':'-0.05rem',
            'transform':'rotate(11deg)'
          },50);
          break;
          case 4:
          $('.gift_boxPic').css({
            'top':'-0.03rem',
            'transform':'rotate(9deg)'
          },50);
          break;
          case 5:
          $('.gift_boxPic').css({
             'top':'-0.03rem',
            'transform':'rotate(6deg)'
          },50);
          break;
          case 6:
          $('.gift_boxPic').css({
            'top':'-0.01rem',
            'transform':'rotate(3deg)'
          },50);
          break;
          case 7:
          $('.gift_boxPic').css({
             'top':'-0.01rem',
            'transform':'rotate(-3deg)'
          },50);
          break;
          case 8:
          $('.gift_boxPic').css({
             'top':'-0.02rem',
            'transform':'rotate(-6deg)'
          },50);
          break;
          case 9:
          $('.gift_boxPic').css({
             'top':'-0.03rem',
            'transform':'rotate(-9deg)'
          },50);
          break;
          case 10:
          $('.gift_boxPic').css({
             'top':'-0.05rem',
            'transform':'rotate(-11deg)'
          },50);
          break;
          case 11:
          $('.gift_boxPic').css({
             'top':'-0.03rem',
            'transform':'rotate(-9deg)'
          },50);
          break;
          case 12:
          $('.gift_boxPic').css({
             'top':'-0.02rem',
            'transform':'rotate(-6deg)'
          },50);
          break;
          case 13:
          $('.gift_boxPic').css({
            'top':'-0.01rem',
            'transform':'rotate(-3deg)'
          },50);
          break;
          default:
          $('.gift_boxPic').css({
            'top':0,
             'transform':'rotate(0deg)'
          },50);
          break;

        }
        gift_i++;
      },50)
  }
})
