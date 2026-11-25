const semesterSections = document.getElementById('semesterSections');
let currentSubject = null, currentIndex = 0, selectedAnswers = [], locked = false;

function renderSubjects(){
  const semesters = [...new Set(quizData.map(s => s.semester))];
  semesterSections.innerHTML = semesters.map(semester => `
    <div class="semester-title">${semester}</div>
    <div class="subject-grid">
      ${quizData.filter(s=>s.semester===semester).map(s=>`
        <button class="subject-card" onclick="startQuiz('${s.code}')">
          <span class="subject-code">${s.code}</span>
          <h3>${s.name}</h3>
          <p>${s.topics}</p>
          <div class="card-bottom"><span>${s.questions.length} practice questions</span><span class="arrow">↗</span></div>
        </button>`).join('')}
    </div>`).join('');
  document.getElementById('subjectCount').textContent = quizData.length;
}
function showView(id){
  ['homeView','quizView','resultView'].forEach(v=>document.getElementById(v).classList.toggle('hidden',v!==id));
}
function startQuiz(code){
  currentSubject = quizData.find(s=>s.code===code);
  currentIndex=0; selectedAnswers=Array(currentSubject.questions.length).fill(null); locked=false;
  document.getElementById('quizCode').textContent=currentSubject.code;
  document.getElementById('quizSubject').textContent=currentSubject.name;
  document.getElementById('quizTopics').textContent='Topics: '+currentSubject.topics;
  showView('quizView'); renderQuestion(); window.scrollTo(0,0);
}
function renderQuestion(){
  const q=currentSubject.questions[currentIndex], chosen=selectedAnswers[currentIndex];
  document.getElementById('questionCount').textContent=`${String(currentIndex+1).padStart(2,'0')} / ${String(currentSubject.questions.length).padStart(2,'0')}`;
  document.getElementById('questionNumber').textContent=String(currentIndex+1).padStart(2,'0');
  document.getElementById('questionText').textContent=q[0];
  document.getElementById('progressBar').style.width=((currentIndex+1)/currentSubject.questions.length*100)+'%';
  document.getElementById('optionsList').innerHTML=q[1].map((opt,i)=>`
    <button class="option ${chosen===i?'selected':''}" onclick="selectAnswer(${i})">
      <span class="letter">${String.fromCharCode(65+i)}</span><span>${opt}</span>
    </button>`).join('');
  document.getElementById('feedback').classList.add('hidden');
  document.getElementById('previousBtn').disabled=currentIndex===0;
  document.getElementById('nextBtn').disabled=chosen===null;
  document.getElementById('nextBtn').textContent=currentIndex===currentSubject.questions.length-1?'Finish quiz ✓':'Next question →';
}
function selectAnswer(i){
  if(selectedAnswers[currentIndex]!==null)return;
  selectedAnswers[currentIndex]=i;
  const q=currentSubject.questions[currentIndex], correct=q[2];
  document.querySelectorAll('.option').forEach((el,index)=>{
    el.disabled=true;
    if(index===correct)el.classList.add('correct');
    if(index===i && i!==correct)el.classList.add('wrong');
  });
  const fb=document.getElementById('feedback');
  fb.textContent=(i===correct?'Correct! ':'Not quite. ')+q[3];
  fb.classList.remove('hidden');
  document.getElementById('nextBtn').disabled=false;
}
function nextQuestion(){
  if(selectedAnswers[currentIndex]===null)return;
  if(currentIndex<currentSubject.questions.length-1){currentIndex++;renderQuestion();}
  else finishQuiz();
}
function previousQuestion(){if(currentIndex>0){currentIndex--;renderQuestion();}}
function finishQuiz(){
  const total=currentSubject.questions.length;
  const correct=selectedAnswers.filter((a,i)=>a===currentSubject.questions[i][2]).length;
  const wrong=total-correct, score=Math.round(correct/total*100);
  document.getElementById('scoreValue').textContent=score+'%';
  document.getElementById('correctCount').textContent=correct;
  document.getElementById('wrongCount').textContent=wrong;
  document.getElementById('totalCount').textContent=total;
  document.getElementById('resultTitle').textContent=score>=80?'Excellent work!':score>=50?'Good effort!':'Keep practising!';
  document.getElementById('resultSubtitle').textContent=currentSubject.name+' · Quiz completed';
  document.getElementById('reviewPanel').classList.add('hidden');
  showView('resultView');window.scrollTo(0,0);
}
function showReview(){
  const panel=document.getElementById('reviewPanel');
  panel.innerHTML='<div class="eyebrow">ANSWER REVIEW</div>'+currentSubject.questions.map((q,i)=>{
    const isRight=selectedAnswers[i]===q[2];
    return `<div class="review-item"><h4>${i+1}. ${q[0]}</h4>
      <p>Your answer: <strong>${selectedAnswers[i]===null?'Not answered':q[1][selectedAnswers[i]]}</strong></p>
      <p class="right">Correct answer: ${q[1][q[2]]}</p><p>${q[3]}</p></div>`;
  }).join('');
  panel.classList.remove('hidden');panel.scrollIntoView({behavior:'smooth'});
}
function restartQuiz(){startQuiz(currentSubject.code);}
function backToSubjects(){showView('homeView');window.scrollTo(0,0);}
function goHome(){showView('homeView');window.scrollTo(0,0);}
renderSubjects();
