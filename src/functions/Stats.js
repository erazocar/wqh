import * as d3 from "d3"

class Stats {
    sum = (array) => {return Math.round(d3.sum(array)*100)/100;}
    mean = (array) => {return Math.round(d3.mean(array)*100)/100;}
    median = (array) => {return Math.round(d3.median(array)*100)/100;}
    stdDev = (array) => {
        var SD;
        var nex = [];
        for (var i = 0; i < array.length; i += 1) {
          nex.push((array[i] - d3.mean(array)) * (array[i] - d3.mean(array)));
        }
        return Math.round((SD = Math.sqrt(d3.sum(nex) / nex.length))*100)/100;
    }
    vari = (array) => {return Math.round(d3.variance(array)*100)/100;}
    min = (array) => {return Math.round(d3.min(array)*100)/100;}
    max = (array) => {return Math.round(d3.max(array)*100)/100;}

    quantile(q, array) {
        var _arr = array.slice();
        _arr.sort(function (a, b) {
          return a - b;
        });
        var p = (array.length - 1) * q;
        if (p % 1 === 0) {
          return Math.round((_arr[p]) * 100) / 100;
        } else {
          var b = Math.floor(p);
          var rest = p - b;
          if (_arr[b + 1] !== undefined) {
            return Math.round((_arr[b] + rest * (_arr[b + 1] - _arr[b]))*100)/100;
          } else {
            return Math.round((_arr[b])*100)/100;
          }
        }
      }
    
    interoutliers(array) {
        var q1 = 0.25;
        var q2 = 0.75;
    
        var or = array
    
        var Q_1 = this.quantile(q1, or);
        var Q_2 = this.quantile(q2, or);
        var IQR = Math.abs(Q_2 - Q_1);
    
        var qd = Math.abs(Q_1 - 1.5 * IQR);
        var qu = Math.abs(Q_2 + 1.5 * IQR);
    
        var xa = (arra) => arra.filter((x) => x >= qd || x >= qu);
        var re = xa(or);

        return array.length - re.length
      }
}

export {Stats}