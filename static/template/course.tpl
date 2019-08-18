<?for(var i=0; i<@hotCourse.length; i++){?>
<div class="lists-content-card col-lg-3 col-md-6 col-sm-6 col-xs-12">
	<a target="_blank" class="course-card g-shadow" href="courselist.html?id=<?=@hotCourse[i].id?>">
		<div class="course-card-cover" style="background:url(<?=@hotCourse[i].image?>) center center no-repeat;background-size:cover;"></div>
		<div class="course-card-content">
			<h3 class="course-card-name ui-nowrap-multi"><?=@hotCourse[i].title?></h3>
			<p class="course-card-intro ui-nowrap-multi"><?=@hotCourse[i].subtitle?></p>
			<div class="clearfix course-card-bottom">
				<div class="course-card-teacher">
					<div class="course-card-teacher-avatar">
						<img src="/static/images/avatar/avatar01.png">
					</div>
					<p class="course-card-teacher-name"><?=@hotCourse[i].teacherName?></p>
				</div>
				<div class="course-card-info"><?=@hotCourse[i].studentCount?>人在学</div>
			</div>
		</div>
	</a>
</div>
<?}?>