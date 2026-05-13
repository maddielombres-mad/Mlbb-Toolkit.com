<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MLBB Toolkit: A GBL- Design for Interactive Instruction</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(to bottom right, #0f172a, #1e293b, #111827);
      overflow-x: hidden;
      color: white;
    }

    h1 {
      text-align: center;
      margin-top: 20px;
      color: #1e293b;
      font-size: 40px;
    }

    .subtitle {
      text-align: center;
      color: #475569;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .mindmap {
      position: relative;
      width: 100%;
      height: 850px;
    }

    .circle {
      position: absolute;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      padding: 20px;
      cursor: pointer;
      transition: transform 0.3s;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }

    .circle:hover {
      transform: scale(1.05);
    }

    .center {
      background: #2563eb;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .upper-left {
      background: #9333ea;
      top: 60px;
      left: 120px;
    }

    .upper-right {
      background: #ec4899;
      top: 60px;
      right: 120px;
    }

    .lower-left {
      background: #22c55e;
      bottom: 60px;
      left: 120px;
    }

    .lower-right {
      background: #f97316;
      bottom: 60px;
      right: 120px;
    }

    .content-box {
      display: none;
      position: absolute;
      width: 400px;
      background: white;
      padding: 20px;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 10;
      color: #1e293b;
    }

    .content-box h2 {
      margin-top: 0;
    }

    .content-box textarea,
    .content-box input {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
      border: 1px solid #cbd5e1;
    }

    .lesson-box {
      top: 300px;
      left: 40px;
    }

    .ppt-box {
      top: 300px;
      right: 40px;
    }

    .materials-box {
      bottom: 40px;
      left: 40px;
    }

    .tips-box {
      bottom: 40px;
      right: 40px;
    }

    .title-box {
      top: 280px;
      left: 50%;
      transform: translateX(-50%);
    }

    ul {
      padding-left: 20px;
    }
  </style>
</head>
<body>

  <h1>MLBB Toolkit: A GBL- Design for Interactive Instruction</h1>
  <p class="subtitle">A Game-Based Learning Toolkit for Interactive and Learner-Centered Instruction</p>

  <div style="text-align:center; margin-bottom:20px;">
    <button onclick="toggleMusic()" style="padding:12px 20px; border:none; border-radius:12px; background:#2563eb; color:white; cursor:pointer; font-weight:bold; margin-right:10px;">Play / Pause Music</button>
    <button onclick="showQRCode()" style="padding:12px 20px; border:none; border-radius:12px; background:#9333ea; color:white; cursor:pointer; font-weight:bold;">Show QR Code</button>
  </div>

  <div class="mindmap">

    <div class="circle center" onclick="toggleBox('titleBox')">
      MLBB Toolkit: A GBL- Design for Interactive Instruction
    </div>

    <div class="circle upper-left" onclick="toggleBox('lessonBox')">
      Interactive Lesson Exemplars
    </div>

    <div class="circle upper-right" onclick="toggleBox('pptBox')">
      Downloadable Presentation Hub
    </div>

    <div class="circle lower-left" onclick="toggleBox('materialsBox')">
      Instructional Materials Repository
    </div>

    <div class="circle lower-right" onclick="toggleBox('tipsBox')">
      Teaching Tips and Strategies
    </div>

    <div class="content-box title-box" id="titleBox">
      <h2>MLBB Toolkit</h2>
      <p>
        The MLBB Toolkit: A GBL- Design for Interactive Instruction is an intervention toolkit designed to support interactive, collaborative, and learner-centered teaching through game-based learning strategies inspired by Mobile Legends. It serves as a centralized platform for lesson exemplars, instructional materials, presentations, and teaching strategies.
      </p>
    </div>

    <div class="content-box lesson-box" id="lessonBox">
      <h2>Interactive Lesson Exemplars</h2>
      <p>
        This section contains lesson exemplars designed using game-based learning principles to increase learner engagement, collaboration, and participation during instruction.
      </p>

      <ul>
        <li><a href="#" target="_blank">Mathematics Lesson Exemplar</a></li>
        <li><a href="#" target="_blank">Science Lesson Exemplar</a></li>
        <li><a href="#" target="_blank">English Lesson Exemplar</a></li>
        <li><a href="#" target="_blank">Filipino Lesson Exemplar</a></li>
      </ul>

      <button onclick="alert('Upload feature ready for deployment database integration.')" style="padding:10px 15px; border:none; border-radius:10px; background:#2563eb; color:white; cursor:pointer; margin-top:10px;">Upload Lesson</button>
    </div>

    <div class="content-box ppt-box" id="pptBox">
      <h2>Downloadable Presentation Hub</h2>
      <p>
        This section allows teachers to provide downloadable PowerPoint presentations and visual learning materials aligned with the MLBB-based instructional approach.
      </p>

      <input type="text" placeholder="Paste PowerPoint link here">
      <button onclick="alert('Presentation link saved.')" style="padding:10px 15px; border:none; border-radius:10px; background:#ec4899; color:white; cursor:pointer; margin-top:10px;">Save Link</button>
    </div>

    <div class="content-box materials-box" id="materialsBox">
      <h2>Instructional Materials Repository</h2>
      <p>
        This section contains links to instructional materials such as worksheets, images, references, activity sheets, and other resources that support classroom learning.
      </p>

      <input type="text" placeholder="Paste material link here">
      <input type="text" placeholder="Paste another material link here">

      <button onclick="alert('Material links saved.')" style="padding:10px 15px; border:none; border-radius:10px; background:#22c55e; color:white; cursor:pointer; margin-top:10px;">Save Materials</button>
    </div>

    <div class="content-box tips-box" id="tipsBox">
      <h2>Teaching Tips and Strategies</h2>
      <p>
        This section provides teaching tips, learner engagement strategies, classroom management techniques, and recommendations for implementing game-based learning effectively.
      </p>

      <textarea rows="6" placeholder="Write your teaching tips here..."></textarea>

      <button onclick="alert('Teaching tips saved.')" style="padding:10px 15px; border:none; border-radius:10px; background:#f97316; color:white; cursor:pointer; margin-top:10px;">Save Tips</button>
    </div>

    <div class="content-box" id="qrBox" style="top:120px; left:50%; transform:translateX(-50%); text-align:center;">
      <h2>Website QR Code</h2>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://mlbb-toolkit.vercel.app" alt="QR Code" style="border-radius:12px;">
      <p>Scan this QR code to access the toolkit website.</p>
    </div>

  </div>

  <audio id="bgMusic" loop>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
  </audio>

  <script>
    function toggleBox(id) {
      const boxes = document.querySelectorAll('.content-box');
      boxes.forEach(box => {
        if (box.id === id) {
          box.style.display = box.style.display === 'block' ? 'none' : 'block';
        } else {
          box.style.display = 'none';
        }
      });
    }

    function toggleMusic() {
      const music = document.getElementById('bgMusic');
      if (music.paused) {
        music.play();
      } else {
        music.pause();
      }
    }

    function showQRCode() {
      toggleBox('qrBox');
    } else {
          box.style.display = 'none';
        }
      });
    }
  </script>

</body>
</html>
