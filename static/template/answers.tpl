<?for(var i=0; i<@answers.length; i++){?>
<div class="ques-answer">
	<div class="answer-con first">
		<div class="user-pic fl">
			<a href="user.html" target="_blank">
				<img src="<?=@answers[i].avatar?>" width="40" height="40" alt="?">
			</a>
		</div>
		<!--.user end-->
		<div class="detail-r">
			<span class="time"><?=@answers[i].time?></span>
			<a class="detail-name" href="user.html" target="_blank"><?=@answers[i].userName?></a>
		</div>
		<div class="answer-content rich-text aimgPreview">
			<p><?=@answers[i].content?></p>
		</div>
		<div class="ctrl-bar js-msg-context clearfix js-reply-tool none">
			<div class="detail-editor-btns fl right">
				<span class="qa-tips"></span>
				<button class="btn btn-normal js-reply-cancel">取消
				</button>
				<button class="btn btn-red js-reply-submit" data-id="250026">保存</button>
			</div>
		</div>
		<?if (@answers[i].adopted == 1) {?>
			<div class="ctrl-bar clearfix js-wenda-tool">
				<span class="had-solve" data-quesid="352915" data-replyid="250026">已被提问者采纳</span>
				<span class="agree-with " data-ques-id="352915" data-answer-id="250026" data-hasop=""><b>赞同</b></span>
				<span class="oppose " data-ques-id="352915" data-answer-id="250026" data-hasop="">反对</span>
			</div>
		<?}?>
	</div>
</div>
<?}?>