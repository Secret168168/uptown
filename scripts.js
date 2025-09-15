    document.addEventListener('DOMContentLoaded', () => {
        const criminalCasesData = [
            
  { no: 1,  caseName: "พื้นที่สุ่มเสี่ยง",                             fine: "1,000",   jail: "10 นาที",  remark: "" },
  { no: 2,  caseName: "หลบหนีการจับกุม",                               fine: "1,500",   jail: "10 นาที",  remark: "" },
  { no: 3,  caseName: "หลบหนีนอกเมือง",                               fine: "10,000",  jail: "20 นาที",  remark: "" },
  { no: 4,  caseName: "งัดบ้าน",                  fine: "10,000",  jail: "30 นาที",  remark: "" },
  { no: 4,  caseName: "สร้างความวุ่นวาย [ ทุกกรณี ]",                  fine: "10,000",  jail: "30 นาที",  remark: "" },
  { no: 5,  caseName: "รบกวนโดยใช้เสียง",                              fine: "5,000",   jail: "30 นาที",  remark: "" },
  { no: 6,  caseName: "ปล้นเล่น",                                       fine: "30,000",  jail: "-",        remark: "" },
  { no: 7,  caseName: "ทะเลาะวิวาท",                                   fine: "5,000",   jail: "30 นาที",  remark: "" },
  { no: 8,  caseName: "ไม่สวมเสื้อผ้า หรือ เข้าข่ายอนาจาร",             fine: "3,000",   jail: "-",        remark: "" },
  { no: 9,  caseName: "แอบอ้างเป็นหน่วยงานราชการ",                     fine: "50,000",  jail: "120 นาที", remark: "" },
  { no: 10, caseName: "ใส่หน้ากาก ปิดบังใบหน้า",                       fine: "20,000",  jail: "30 นาที",  remark: "" },
  { no: 11, caseName: "ไม่ให้ความร่วมมือกับเจ้าหน้าที่",                 fine: "10,000",  jail: "20 นาที",  remark: "" },
  { no: 12, caseName: "ทำให้ผู้อื่นรู้สึกอันตราย",                      fine: "10,000",  jail: "20 นาที",  remark: "" },
  { no: 13, caseName: "สมรู้ร่วมคิด",               fine: "ปรับเท่ากับคนที่มาด้วยกัน", jail: "เท่ากับคนที่มาด้วยกัน", remark: "" },
  { no: 14, caseName: "ไม่มาตามหมายเรียกของเจ้าหน้าที่ตำรวจ",           fine: "20,000",  jail: "30 นาที",  remark: "" },
  { no: 15, caseName: "โดนประกาศหมายจับ หรือ Blacklist",                fine: "50,000",  jail: "60 นาที",  remark: "" },
  { no: 16, caseName: "ทำลายทรัพย์สินผู้อื่น ให้เกิดความเสียหาย",       fine: "10,000",  jail: "30 นาที",  remark: "" },
  { no: 17, caseName: "ความผิดฐานบุกรุกเคหสถาน / บุกรุกบ้าน",           fine: "10,000",  jail: "60 นาที",  remark: "" },
  { no: 18, caseName: "แจ้งข้อมูลเท็จแก่เจ้าหน้าที่ตำรวจ",               fine: "10,000",  jail: "30 นาที",  remark: "" },
  { no: 19, caseName: "กระทำความผิดซึ่งหน้า",                           fine: "10,000",  jail: "30 นาที",  remark: "" },
//   { no: 20, caseName: "ส่งของผิดกฎหมาย",                                fine: "X2",      jail: "X2",       remark: "" },
  { no: 20, caseName: "ทำลายหลักฐาน",                                    fine: "15,000",  jail: "30 นาที",  remark: "" },
  { no: 21, caseName: "ยัดเยียดสิ่งของผิดกฎหมายให้ผู้อื่น",             fine: "10,000",  jail: "20 นาที",  remark: "" },
  { no: 22, caseName: "ไม่จ่ายค่าเสียหายให้คู่กรณี",                     fine: "15,000",  jail: "20 นาที",  remark: "" },
  { no: 23, caseName: "หลบหนีออกจากพื้นที่ผิดกฎหมาย",                   fine: "3,000",   jail: "15 นาที",  remark: "" },
  { no: 24, caseName: "แต่งเครื่องแบบตำรวจ หรือคล้ายตำรวจ",             fine: "20,000",  jail: "30 นาที",  remark: "" },
  { no: 25, caseName: "ใช้เครื่องแบบตำรวจ เช่น เกราะตำรวจ ป้ายตำรวจ ซองปืน และซองมีด", fine: "20,000", jail: "30 นาที", remark: "" },
  { no: 26, caseName: "พยายามติดสินบนเจ้าหน้าที่",                      fine: "50,000",  jail: "60 นาที",  remark: "" },
  { no: 27, caseName: "ขโมยรถผู้อื่น",                                   fine: "15,000",  jail: "30 นาที",  remark: "" },
  { no: 28, caseName: "หลบหนี หลังจากการจับกุม",                          fine: "30,000",  jail: "60 นาที",  remark: "" },
//   { no: 30, caseName: "หลบหนี ขึ้นเขา-ลงน้ำ",                            fine: "0",      jail: "40 นาที",  remark: "" },
//   { no: 31, caseName: "การกระทำความผิดด้าน Emote หรือ การกระทำผิดในการใช้ Shift + H", fine: "0", jail: "0", remark: "" },
  { no: 29, caseName: "งัดตู้โทรศัพท์",                                   fine: "3,000",   jail: "20 นาที",  remark: "" },
  { no: 30, caseName: "บิดของ / บิดเงิน / ฉ้อโกง",                        fine: "50,000",  jail: "60 นาที",  remark: "" },
  { no: 31, caseName: "ทำร้ายร่างกายประชาชนถึงแก่ชีวิต",                  fine: "50,000",  jail: "60 นาที",  remark: "" },
  { no: 32, caseName: "ทำลายทรัพย์สินหน่วยงาน",                          fine: "30,000",  jail: "30 นาที",  remark: "" },
  { no: 33, caseName: "พยายามทำร้ายร่างกายหน่วยงาน",                      fine: "100,000", jail: "60 นาที",  remark: "" },
  { no: 34, caseName: "ทำร้ายร่างกายประชาชนไม่ถึงแก่ชีวิต",               fine: "30,000",  jail: "30 นาที",  remark: "" },
  { no: 35, caseName: "งัดร้าน",                                          fine: "3,000",   jail: "20 นาที",  remark: "" },
  { no: 36, caseName: "ทำงานดำก่อนประเทศรี 15 นาที",                      fine: "5,000",   jail: "30 นาที",  remark: "" }


        ];
        const orengCasesData = [
{ no: 1,  caseName: "หมิ่นประมาทเจ้าหน้าที่รัฐ / ข่มขู่เจ้าหน้าที่รัฐ",        fine: "50,000",  jail: "60 นาที",  remark: "" },
{ no: 2,  caseName: "ขัดขวางการทำงานเจ้าหน้าที่ / ช่วยเหลือผู้กระทำผิด",       fine: "10,000",  jail: "30 นาที",  remark: "" },
{ no: 3,  caseName: "นักโทษหลบหนีออกจากเรือนจำหรือพยายามแหกคุกใหญ่",          fine: "50,000",  jail: "60 นาที",  remark: "" },
{ no: 4,  caseName: "บุกรุกสถานที่ราชการ สน. หรือเรือนจำ (คุกใหญ่)",            fine: "20,000",  jail: "30 นาที",  remark: "" },
{ no: 5,  caseName: "ฆาตกรรม / อุ้มห่อศพ - ประชาชน [ถุงห่อศพ]",                fine: "100,000", jail: "60 นาที",  remark: "" },
{ no: 6,  caseName: "ฆาตกรรม / อุ้มห่อศพ - หน่วยงานรัฐทั้งหมด [ถุงห่อศพ]",      fine: "300,000", jail: "100 นาที", remark: "" },
{ no: 7,  caseName: "อุ้มอำพรางศพ - ประชาชน [อุ้มไม่ห่อ]",                      fine: "50,000",  jail: "30 นาที",  remark: "" },
{ no: 8,  caseName: "อุ้มอำพรางศพ - หน่วยงานรัฐทั้งหมด [อุ้มไม่ห่อ]",            fine: "150,000", jail: "60 นาที",  remark: "" },
{ no: 9,  caseName: "ก่อเหตุบริเวณ สน. / โรงพยาบาล / สภา",                        fine: "100,000", jail: "60 นาที",  remark: "" },
{ no: 10, caseName: "ขโมยรถหน่วยงาน / หรือพยายามขโมย",                           fine: "100,000", jail: "60 นาที",  remark: "" },
{ no: 11, caseName: "ทำร้ายร่างกายหน่วยงานถึงแก่ชีวิต",                           fine: "200,000", jail: "60 นาที",  remark: "" },
{ no: 12, caseName: "(ฝ่าฝืนเคอร์ฟิว) ฝ่าฝืนมาตรการบังคับใช้กฎหมายพิเศษ",       fine: "50,000",  jail: "60 นาที",  remark: "" },
{ no: 13, caseName: "หลบหนีเข้าพื้นที่เรเบล",                                     fine: "50,000",  jail: "60 นาที",  remark: "" },
{ no: 14, caseName: "ทำร้ายร่างกายหน่วยงานไม่ถึงแก่ชีวิต / ร่วมกันทำร้ายร่างกายหน่วยงาน", fine: "100,000", jail: "60 นาที", remark: "" },
{ no: 15, caseName: "FULL SYSTEM",                                                  fine: "300,000", jail: "200 นาที", remark: "" }

        ];
        const redCasesData = [
            { no: 1, caseName: "หลบหนีขึ้นเขาหลบหนี ขึ้นเขา-ลงน้ำ",       fine: "0", jail: "40", remark: "0" },
            { no: 2, caseName: "การกระทำความผิดด้าน Emote  หรือ การกระทำผิดในการใช้ Shift + H", fine: "0", jail: "0", remark: "0" },
            { no: 3, caseName: "ส่งของผิดกฏหมาย", fine: "0", jail: "0", remark: "0" },
            { no: 4, caseName: "ร่วมกันกระทำความผิด", fine: "0", jail: "30", remark: "0" },
        ];

        const gdCasesData = [
{ no: 1, caseName: "ประกันเวลา (นาทีละ 200)", fine: "200", jail: "0 นาที", remark: "ใส่จำนวนนาทีที่ต้องการประกัน" },
{ no: 2, caseName: "ปูน",            fine: "2,000",    jail: "10นาที", remark: "" },
{ no: 3, caseName: "เงินผิดกฎหมาย",   fine: "2ต่อ1 ",            jail: "15นาที", remark: "" },
{ no: 4, caseName: "Lock Pick",     fine: "10,000",  jail: "0",           remark: "" },
{ no: 6, caseName: "Brandbag",      fine: "3,000",   jail: "5 นาที",      remark: "" },
{ no: 7, caseName: "Black glove",   fine: "1,000",   jail: "5 นาที",      remark: "" },
{ no: 8, caseName: "Credit card",   fine: "4,000",   jail: "5 นาที",      remark: "" },
{ no: 9, caseName: "Wallet",        fine: "4,000",   jail: "5 นาที",      remark: "" },
{ no: 10, caseName: "Cosmetic",      fine: "2,000",   jail: "5 นาที",      remark: "" },
{ no: 11, caseName: "หมิ่นประมาทเจ้าหน้าที่รัฐ / ข่มขู่เจ้าหน้าที่รัฐ",      fine: "50,000",   jail: "60",      remark: "" },
{ no: 12, caseName: "Blue Key",      fine: "15,000",   jail: "15",      remark: "" },
{ no: 13, caseName: "Black Key",      fine: "30,000",   jail: "30",      remark: "" },
{ no: 14, caseName: "Screw A",      fine: "200,000",   jail: "30",      remark: "" },
{ no: 15, caseName: "Screw B",      fine: "200,000",   jail: "30",      remark: "" },
{ no: 16, caseName: "Screw C",      fine: "200,000",   jail: "30",      remark: "" },
        ];

        

        const criminalCasesTableBody = document.querySelector('#criminalCasesTable tbody');
        const orengCasesTableBody = document.querySelector('#orengCasesTable tbody');
        const redCasesTableBody = document.querySelector('#redCasesTable tbody');
        const gdCasesTableBody = document.querySelector('#gdCasesTable tbody');
        
        

        // เติมข้อมูลตาราง
        populateTable(criminalCasesTableBody, criminalCasesData);
        populateTable(orengCasesTableBody, orengCasesData);
        populateTable(redCasesTableBody, redCasesData);
        populateTable(gdCasesTableBody, gdCasesData);
        
        // เคสที่ "ห้ามคูณ"
const EXEMPT_FROM_MULT = new Set([
  "ประกันเวลา (นาทีละ 200)",
  "UNJAIL CARD 15 MIN",
  "UNJAIL CARD 5 MIN",
]);

// เคสที่ "ไม่ต้องแสดงในสรุป"
const HIDE_IN_SUMMARY = new Set([
  "ประกันเวลา (นาทีละ 200)",
  "UNJAIL CARD 15 MIN",
  "UNJAIL CARD 5 MIN",
]);


document.getElementById('exportBtn').addEventListener('click', () => {
  const allTables = [criminalCasesTableBody, redCasesTableBody, gdCasesTableBody, orengCasesTableBody];

  // แยกยอดคูณได้/ห้ามคูณ
  let subtotalFine = 0;   // รวมค่าปรับที่ "คูณได้"
  let subtotalTime = 0;   // รวมเวลาจำคุกที่ "คูณได้"
  let exemptFine   = 0;   // รวมค่าปรับที่ "ห้ามคูณ"
  let exemptTime   = 0;   // รวมเวลาจำคุกที่ "ห้ามคูณ"

  const picked = []; // เก็บ {caseName, quantity} สำหรับทำสรุป
  let hasHillWaterEscape = false;   // ส่งของผิดกฏหมาย -> x2 ทั้งปรับและเวลา
  let Escapedintothewater = false;  // หลบหนีขึ้นเขา-ลงน้ำ -> x3 เฉพาะค่าปรับ
  let scapedwhilebei = false;       // Emote/Shift+H -> x5 ทั้งปรับและเวลา
   let asdqweqwrsd = false;       // x3 เฉพาะค่าปรับ

  allTables.forEach(tableBody => {
    const selectedRows = Array.from(
      tableBody.querySelectorAll('tr')
    ).filter(row => row.querySelector('input[type="checkbox"]')?.checked);

    selectedRows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const caseName = cells[2].textContent.trim();
      let fine = parseFine(cells[3].textContent);
      let jailTime = parseJailTime(cells[4].textContent);
      let quantity = 1;

      // โซนพิเศษสำหรับตาราง gd (มี quantity)
      if (tableBody === gdCasesTableBody) {
        const quantityInput = row.querySelector('input[type="number"]');
        quantity = parseInt(quantityInput?.value, 10) || 1;

        const originalFine = parseInt(quantityInput?.dataset.originalFine || '0', 10);
        const originalJail = parseInt(quantityInput?.dataset.originalJail || '0', 10);
        fine = originalFine * quantity;
        jailTime = (originalJail || 0) * quantity;

        // เคสพิเศษเฉพาะชื่อ
        if (caseName === "เงินผิดกฎหมาย") {
          fine = 2 * quantity; // ตามเงื่อนไขเดิม
          jailTime = 15;
        } else if (caseName === "คีมงัดร้าน") {
          fine = 2000 * quantity;
          jailTime = 0;
        } else if (caseName === "ประกันเวลา (นาทีละ 200)") {
          fine = 200 * quantity;
          jailTime = -1 * quantity; // หักนาทีจากโทษ
        } else if (caseName === "UNJAIL CARD 15 MIN") {
          fine = 0;
          jailTime = -15 * quantity;
        } else if (caseName === "UNJAIL CARD 5 MIN") {
          fine = 0;
          jailTime = -5 * quantity;
        } else if (caseName === "ปูนเขียว") {
          fine = 5000 * quantity;
          jailTime = 10;
        } else if (caseName === "ปูน") {
          fine = 2000 * quantity;
          jailTime = 10;
        } else if (caseName === "แคปซูล") {
          fine = 4000 * quantity;
          jailTime = 10;
        } else if (caseName === "หมิ่นประมาทเจ้าหน้าที่รัฐ / ข่มขู่เจ้าหน้าที่รัฐ") {
          fine = 50000 * quantity;
          jailTime = 60;
        }else if (caseName === "Blue Key") {
          fine = 15000 * quantity;
          jailTime = 15;
      }else if (caseName === "Black Key") {
          fine = 30000 * quantity;
          jailTime = 30;
      }else if (caseName === "Screw A") {
          fine = 200000 * quantity;
          jailTime = 30;
      }
      else if (caseName === "Screw B") {
          fine = 200000 * quantity;
          jailTime = 30;
      }else if (caseName === "Screw C") {
          fine = 200000 * quantity;
          jailTime = 30;
      }
      }

      // สะสมเข้า "คูณได้" vs "ห้ามคูณ"
      if (EXEMPT_FROM_MULT.has(caseName)) {
        exemptFine += fine;
        exemptTime += jailTime;
      } else {
        subtotalFine += fine;
        subtotalTime += jailTime;
      }

      // ใช้ไว้สำหรับสรุปตอนท้าย
      picked.push({ caseName, quantity });

      // ธงตัวคูณตามคดีที่เลือก
      if (caseName.includes("ร่วมกันกระทำความผิด")) {
        asdqweqwrsd = true;
      }
      if (caseName.includes("ส่งของผิดกฏหมาย")) {
        hasHillWaterEscape = true;
      }
      if (caseName.includes("หลบหนีขึ้นเขาหลบหนี ขึ้นเขา-ลงน้ำ")) {
        Escapedintothewater = true;
      }
      if (caseName.includes("การกระทำความผิดด้าน Emote") || caseName.includes("Shift + H")) {
        scapedwhilebei = true;
      }
      
    });
  });

  // คูณเฉพาะ subtotal (ห้ามไปโดนยอด exempt)
  let fineMultiplier = 1;
  let timeMultiplier = 1;

  if (asdqweqwrsd) {
    fineMultiplier *= 3;
  }

  if (hasHillWaterEscape) {
    fineMultiplier *= 2;
    timeMultiplier *= 2;
  }
  if (Escapedintothewater) {
    fineMultiplier *= 3; // เฉพาะค่าปรับ
  }
  if (scapedwhilebei) {
    fineMultiplier *= 5;
    timeMultiplier *= 5;
  }
  

  let totalFine = subtotalFine * fineMultiplier + exemptFine;
  let totalTime = subtotalTime * timeMultiplier + exemptTime;

  // min jail 5 นาที ใช้เฉพาะเมื่อเป็นโทษบวก
const displayTime = Math.max(totalTime, 5);

  // สรุปรายชื่อคดี (ตัดที่ไม่อยากโชว์)
  const shown = picked.filter(it => !HIDE_IN_SUMMARY.has(it.caseName));
  const caseFine = shown.length ? shown.map(it => it.caseName).join(' + ') : "ไม่มีคดี";
  const caseQuantity = shown.length ? shown.map(it => it.quantity).join(' + ') : "0";

  const message  = `ชื่อ:  \nคดี: ${caseFine}\nจำนวน: ${caseQuantity}\nค่าปรับ: ${totalFine}\nจำคุก: ${displayTime} นาที \nผู้จับกุม/สืบสวน: @`;
  const message1 = `ชื่อ:  \nคดี: ${caseFine}\nจำนวน: ${caseQuantity}\nค่าปรับ: ${totalFine}\nจำคุก: ${totalTime} นาที \nผู้จับกุม/สืบสวน: @`;
  const message2 = ` ${caseFine}`;
  const message3 = `ชื่อ:  \nคดี: ${caseFine}\nจำนวน: ${caseQuantity}\nค่าปรับ: ${totalFine}\nจำคุก: ${totalTime} นาที \nผู้จับกุม/สืบสวน: @`;
  const message6 = `ชื่อ:  \nคดี: ${caseFine}\nจำนวน: ${caseQuantity}\nค่าปรับ: ${totalFine}\nจำคุก: ${displayTime} นาที \nผู้จับกุม/สืบสวน: @`;

  document.getElementById('caseSummary').textContent  = message;
  document.getElementById('caseSummary1').textContent = message1;
  document.getElementById('caseSummary2').textContent = message2;
  document.getElementById('caseSummary3').textContent = message3;
  document.getElementById('caseSummary6').textContent = message6;
});

        document.getElementById('copyBtn').addEventListener('click', () => {
            copyToClipboard('caseSummary');
        });

        document.getElementById('copyBtn1').addEventListener('click', () => {
            copyToClipboard('caseSummary1');
        });
        document.getElementById('copyBtn2').addEventListener('click', () => {
            copyToClipboard('caseSummary3');
        });
        document.getElementById('copyBtn3').addEventListener('click', () => {
            copyToClipboard('caseSummary4');
        });
        document.getElementById('copyBtn4').addEventListener('click', () => {
            copyToClipboard('caseSummary5');
        });
        document.getElementById('copyBtn5').addEventListener('click', () => {
            copyToClipboard('caseSummary6');
        });
        function copyToClipboard(elementId) {
            const text = document.getElementById(elementId).textContent;
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
        }

        function populateTable(tableBody, data) {
            tableBody.innerHTML = '';
            const isGdTable = tableBody.id === 'gdCasesTable';
        
            data.forEach((item, index) => {
                const row = document.createElement('tr');
        
                const fine = parseInt(item.fine) || 0;
                const jail = parseInt(item.jail) || 0;
        
                row.innerHTML = `
                    <td>${item.no}</td>
                    <td>${index + 1}</td>
                    <td>${item.caseName}</td>
                    <td>${item.fine}</td>
                    <td>${item.jail}</td>
                    <td>${item.remark || ''}</td>
                `;
        
                const checkboxCell = document.createElement('td');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkboxCell.appendChild(checkbox);
        
                if (isGdTable) {
                    const quantityInput = document.createElement('input');
                    quantityInput.type = 'number';
                    quantityInput.value = 1;
                    quantityInput.min = 1;
                    quantityInput.style.width = '50px';
                    quantityInput.dataset.originalFine = fine;
                    quantityInput.dataset.originalJail = jail;
                    checkboxCell.appendChild(quantityInput);
                }
        
                row.appendChild(checkboxCell);
                tableBody.appendChild(row);
            
        
            
                

                if (tableBody === gdCasesTableBody) {
                    const quantityCell = document.createElement('td');
                    const quantityInput = document.createElement('input');
                    quantityInput.type = 'number';
                    quantityInput.value = 1;
                    quantityInput.min = 1;
                    quantityInput.dataset.originalFine = item.fine.split('/')[0].replace(/,/g, '');
                    quantityInput.dataset.originalJail = item.jail.split('/')[0].replace(/[^0-9]/g, '');
                    quantityInput.addEventListener('input', (e) => {
                        const input = e.target;
                        const quantity = parseInt(input.value, 10) || 1;
                        const originalFine = parseInt(input.dataset.originalFine, 10);
                        const originalJail = parseInt(input.dataset.originalJail, 10);
                        const totalFine = originalFine * quantity;
                        const totalJail = (originalJail || 0) * quantity;

                        input.dataset.totalFine = totalFine;
                        input.dataset.totalJail = totalJail;
                    });
                    
                    quantityCell.appendChild(quantityInput);
                    row.appendChild(quantityCell);
                }

                tableBody.appendChild(row);
            });
        }

        function parseFine(fineText) {
            return parseInt(fineText.replace(/,/g, '').replace(/[^0-9]/g, ''), 10) || 0;
        }

        function parseJailTime(jailText) {
            return parseInt(jailText.replace(/[^0-9]/g, ''), 10) || 0;
        }

        function calculateJailTime(fine) {
            return Math.floor(fine * 0.001) * 5;
        }
        
        document.addEventListener("DOMContentLoaded", function () {
            const fadeElements = document.querySelectorAll(".fade-in");
        
            function checkPosition() {
                fadeElements.forEach((el) => {
                    const position = el.getBoundingClientRect().top;
                    const screenHeight = window.innerHeight;
                    if (position < screenHeight - 50) {
                        el.classList.add("show");
                    }
                });
            }
        
            window.addEventListener("scroll", checkPosition);
            checkPosition();
        });
        
        document.addEventListener("DOMContentLoaded", function () {
            const fadeElements = document.querySelectorAll(".fade-in");
            const navbar = document.querySelector(".navbar");
            let lastScrollTop = 0;
        
            function checkPosition() {
                fadeElements.forEach((el) => {
                    const position = el.getBoundingClientRect().top;
                    const screenHeight = window.innerHeight;
                    if (position < screenHeight - 50) {
                        el.classList.add("show");
                    }
                });
            }
        
            function handleScroll() {
                let scrollTop = window.scrollY || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    navbar.style.top = "-70px"; // เลื่อนลง ซ่อน Navbar
                } else {
                    navbar.style.top = "0"; // เลื่อนขึ้น แสดง Navbar
                }
                lastScrollTop = scrollTop;
            }
        
            window.addEventListener("scroll", () => {
                checkPosition();
                handleScroll();
            });
        
            checkPosition();
        });
        
    });
   