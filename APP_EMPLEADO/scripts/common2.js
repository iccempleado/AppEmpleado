//$(document).ready(function () {
	var da = [];
	var db = [];
	var dc = [];
	var da1,db1,dc1,da2,db2,dc2,da3,db3,dc3,da4,db4,dc4,da5,db5,dc5,da6,db6,dc6,da7,db7,dc7,da8,db8,dc8,da9,db9,dc9,da10,db10,dc10,da11,db11,dc11,da12,db12,dc12;

	$.ajax({
            url: 'datos.php', //Tu archivo donde estará tu consulta
            type: 'POST', 
            dataType: 'json',
        })
        .done(function(data) {
            //console.log(data); //Imprime tu arreglo, observa la estructura
			$.each(data, function( index, value ) {
				alert(index+'=>'+value);
				$.each(value, function( index1, value1 ) {
						/*if (index1 == "mes" && value1 == "1"){
							alert( index1 + ": " + value1 );
							var da1 = [1,14];
									alert(da1);
						}*/

						switch (index) {
							case 0:
								switch (index1) {
									case "aspect": da1 = [index+1,value1]; break;
									case "asterisk": db1 = [index+1,value1]; break;
									case "elastik": dc1 = [index+1,value1]; break;
    							}
							break;
							case 1:
								switch (index1) {
									case "aspect": da2 = [index+1,value1]; break;
									case "asterisk": db2 = [index+1,value1]; break;
									case "elastik": dc2 = [index+1,value1]; break;
    							}
							break;
							case 2:
								switch (index1) {
									case "aspect": da3 = [index+1,value1]; break;
									case "asterisk": db3 = [index+1,value1]; break;
									case "elastik": dc3 = [index+1,value1]; break;
    							}
							break;
							case 3:
								switch (index1) {
									case "aspect": da4 = [index+1,value1]; break;
									case "asterisk": db4 = [index+1,value1]; break;
									case "elastik": dc4 = [index+1,value1]; break;
    							}
							break;
							case 4:
								switch (index1) {
									case "aspect": da5 = [index+1,value1]; break;
									case "asterisk": db5 = [index+1,value1]; break;
									case "elastik": dc5 = [index+1,value1]; break;
    							}
							break;
							case 5:
								switch (index1) {
									case "aspect": da6 = [index+1,value1]; break;
									case "asterisk": db6 = [index+1,value1]; break;
									case "elastik": dc6 = [index+1,value1]; break;
    							}
							break;
							case 6:
								switch (index1) {
									case "aspect": da7 = [index+1,value1]; break;
									case "asterisk": db7 = [index+1,value1]; break;
									case "elastik": dc7 = [index+1,value1]; break;
    							}
							break;
							case 7:
								switch (index1) {
									case "aspect": da8 = [index+1,value1]; break;
									case "asterisk": db8 = [index+1,value1]; break;
									case "elastik": dc8 = [index+1,value1]; break;
    							}
							break;
							case 8:
								switch (index1) {
									case "aspect": da9 = [index+1,value1]; break;
									case "asterisk": db9 = [index+1,value1]; break;
									case "elastik": dc9 = [index+1,value1]; break;
    							}
							break;
							case 9:
								switch (index1) {
									case "aspect": da10 = [index+1,value1]; break;
									case "asterisk": db10 = [index+1,value1]; break;
									case "elastik": dc10 = [index+1,value1]; break;
    							}
							break;
							case 10:
								switch (index1) {
									case "aspect": da11 = [index+1,value1]; break;
									case "asterisk": db11 = [index+1,value1]; break;
									case "elastik": dc11 = [index+1,value1]; break;
    							}
							break;
							case 11:
								switch (index1) {
									case "aspect": da12 = [index+1,value1]; break;
									case "asterisk": db12 = [index+1,value1]; break;
									case "elastik": dc12 = [index+1,value1]; break;
    							}
							break;
						}		
				});
			});
        
		
		
        $('.datatable-1').dataTable();
        $('.dataTables_paginate').addClass('btn-group datatable-pagination');
        $('.dataTables_paginate > a').wrapInner('<span />');
        $('.dataTables_paginate > a:first-child').append('<i class="icon-chevron-left shaded"></i>');
        $('.dataTables_paginate > a:last-child').append('<i class="icon-chevron-right shaded"></i>');
    
        $( '.slider-range').slider({
			    range: true,
			    min: 0,
			    max: 20000,
			    values: [ 3000, 12000 ],			
			    slide: function(event, ui) {
				    $(this).find('.ui-slider-handle').attr('title', ui.value);
			    },
	    });
	
        $( '#amount' ).val( '$' + $( '.slider-range' ).slider( 'values', 0 ) + ' - $' + $( '.slider-range' ).slider( 'values', 1 ) );
    

    //Graph/Chart index.html

		da.push(da1);
		da.push(da2);
		da.push(da3);
		da.push(da4);
		da.push(da5);
		da.push(da6);
		da.push(da7);
		da.push(da8);
		da.push(da9);
		da.push(da10);
		da.push(da11);
		da.push(da12);
		
		db.push(db1);
		db.push(db2);
		db.push(db3);
		db.push(db4);
		db.push(db5);
		db.push(db6);
		db.push(db7);
		db.push(db8);
		db.push(db9);
		db.push(db10);
		db.push(db11);
		db.push(db12);
		
		dc.push(dc1);
		dc.push(dc2);
		dc.push(dc3);
		dc.push(dc4);
		dc.push(dc5);
		dc.push(dc6);
		dc.push(dc7);
		dc.push(dc8);
		dc.push(dc9);
		dc.push(dc10);
		dc.push(dc11);
		dc.push(dc12);
		
		var plot = $.plot($('#placeholder2'),
			   [ { data: da, label: 'Aspect'}, { data: db, label: 'Asterisk' },{ data: dc, label: 'Elastik'} ], {
					lines: {
						show: true,
						fill: true, /*SWITCHED*/
						lineWidth: 2
					},
					points: {
						show: true,
						lineWidth: 5
					},
					grid: {
						clickable: true,
						hoverable: true,
						autoHighlight: true,
						mouseActiveRadius: 10,
						aboveData: true,
						backgroundColor: '#fff',
						borderWidth: 0,
						minBorderMargin: 25,
					},
					colors: [ '#55f3c0', '#0B1',  '#ccc', '#e0d1cb'],
					shadowSize: 0
				 });
    

		function showTooltip(x, y, contents) {
			$('<div id="gridtip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5
			}).appendTo('body').fadeIn(300);
		}

		var previousPoint = null;
		$('#placeholder2').bind('plothover', function (event, pos, item) {
			$('#x').text(pos.x.toFixed(2));
			$('#y').text(pos.y.toFixed(2));

			if (item) {
				if (previousPoint != item.dataIndex) {
					previousPoint = item.dataIndex;

					$('#gridtip').remove();
					var x = item.datapoint[0].toFixed(0),
						y = item.datapoint[1].toFixed(0);

					showTooltip(item.pageX, item.pageY,
								'dia : ' + x + '&nbsp;&nbsp;&nbsp; Cantidad : ' + y);
				}
			}
			else {
				$('#gridtip').remove();
				previousPoint = null;
			}
		});

//});

})
        .fail(function() {
            console.log("Error al cargar el arreglo");
        });
