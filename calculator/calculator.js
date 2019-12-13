var loadAmount = 700000; // 贷款总额，单位元

var floatPercent = 1.13; // 贷款上浮比例

var yearRate = 0.049 * floatPercent; // 年利率

var monthRate = yearRate / 12; // 月利率 = 年利率 / 12

var yearCount = 20; // 贷款年限

var monthCount = yearCount * 12; // 贷款月数

/* 1.等额本息还款法还款金额：
每月应还金额：a*[i*(1+i)^n]/[(1+i)^n-1]
（注：a：贷款本金 ，i：贷款月利率， n：贷款月数 ）
（注：amount：贷款本金 ，rate：贷款月利率， n：贷款月数 ） */
/* 计算每月还款额
（注：amount：贷款本金 ，rate：贷款月利率， n：贷款月数 ）
 */
function calMonthlyPayment({
  amount, rate, n
}) {
  console.log(amount, rate, n);
  const powRate = Math.pow(1+rate, n);
  return ((amount * rate) * powRate) / (powRate - 1);
}

var result = calMonthlyPayment({
  amount: loadAmount,
  rate: monthRate,
  n: monthCount,
});

console.log(result, result * monthCount);

var test = calMonthlyPayment({
  amount: 3164.13,
  rate: 0.037,
  n: 12,
});

console.log(test, 0.037 * 12);