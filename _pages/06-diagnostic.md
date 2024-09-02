---
layout: default
title: Diagnostic
permalink: diagnostic
---
{% assign skills = site.skills %}


<script>var skillGroups = [];</script>

<div class="row mt-5">
      <div class="col-12">
      
      <p>Choose the level that best fits your experience.</p>

      
<div class="row">
<div class="col-md-4">
            <p><strong>Beginner</strong> = I have never done this</p>
            <p><strong>Novice</strong> = I have done this once or twice</p>
            <p><strong>Experienced</strong> = I have done this many times in different environments</p>
            <p><strong>Expert</strong> = I am often called upon to support other people to do this</p>
            </div>
<div class="assessmentSlider col-md-8" id="assessmentSlider">

    {% for c in skills %}
      {% for item in c.items %}


        <div class="row">
        <script>skillGroups.push(["{{ c.title }}","{{ c.ID }}_{{ item.ID }}",0]);</script>
          <div class="col-md-12">
            <!--<h4>{{ c.title }}</h4>-->
            <a class="info-button" href="#" data-featherlight="#infobox-{{ item.ID | slugify }}"><img src="/assets/images/info.svg" alt="Info icon"></a>
            <div class="hide"><div id="infobox-{{ item.ID | slugify }}"><h4>{{ item.name }}</h4><p>{{ item.info }}</p></div></div>
            <h4>{{ item.name }}</h4>
            
            <input type="radio" id="{{ c.ID }}_{{ item.ID }}_0" name="{{ c.ID }}_{{ item.ID }}" value="0" checked="checked">
            <label for="{{ item.ID }}">Not relevant</label>
          </div>
          <div class="col-md-6">
            <div>
              
              <input type="radio" id="{{ c.ID }}_{{ item.ID }}_1" name="{{ c.ID }}_{{ item.ID }}" value="1">
              <label>Beginner</label>
            </div>
         
            <div>
              
              <input type="radio" id="{{ c.ID }}_{{ item.ID }}_2" name="{{ c.ID }}_{{ item.ID }}" value="2">
              <label>Novice</label>
            </div>
            <div>
              
              <input type="radio" id="{{ c.ID }}_{{ item.ID }}_3" name="{{ c.ID }}_{{ item.ID }}" value="3">
              <label>Experienced</label>
            </div>
            <div>
            
            <input type="radio" id="{{ c.ID }}_{{ item.ID }}_3" name="{{ c.ID }}_{{ item.ID }}" value="3">
            <label>Expert</label>
            </div>
          </div>
          
        </div>

        {% endfor %}
    {% endfor %}


<!--<div class="text-center"><button type="submit" class="btn btn-primary">Produce assessment graph</button></div>-->
</div> <!-- end of slider -->

</div><!-- end of row -->
<!-- Button trigger modal -->
<div class="text-center">
<button id="start" type="submit" class="btn btn-secondary">Return to start</button>
<button id="previous" type="submit" class="btn btn-secondary">Previous</button>
<button id="next" type="submit" class="btn btn-secondary">Next</button>
<button id="showSummary" type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Show summary chart
</button>
</div>

<p>&nbsp;</p>
<p class="text-center">Please note, this data is not stored on our systems.</p>




</div> <!-- End of column -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <canvas id="radarChart"></canvas>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <a type="button" id="downloadChart" class="btn btn-primary" download="skill-assessment">Download summary</a>
      </div>
    </div>
  </div>
</div>









</div><!-- end of row-->
