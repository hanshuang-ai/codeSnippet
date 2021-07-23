//geojson有固定的格式，所以只需要里面的coordinates
for (let i = 0; i < features.length; i++) {
    let feature = features[i];
    let geometry = feature.geometry;
    let type = geometry.type;
    let coordinates = geometry.coordinates;
    let scalex = (xmax - xmin) / value;
    let scaley = (ymax - ymin) / value;
    let color = colors[i]

    //type:Polygon 和 MultiPolygon 表示的就是geojson里面的区域空间
    if (type === "Polygon") {
        drawPolygon(coordinates, scalex, scaley, color);
    } else if (type === "MultiPolygon") {
        for (let j = 0; j < coordinates.length; j++) {
            let polygon = coordinates[j];
            drawPolygon(polygon, scalex, scaley, color);
        }
    }
}


function drawPolygon(polygon, scalex, scaley, coloritem) {
    ctx.beginPath();
    let points = polygon[0];
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        let x = Number(point[0])
        let y = Number(point[1])

        //满画布填充
        let l = (x - xmin) / scalex;
        let t = value - (y - ymin) / scaley;

        if (i === 0) {
            ctx.moveTo(l, t);
        } else {
            ctx.lineTo(l, t)
        }
    }
    // canvas globalCompositeOperation属性解决部分小区域被大区域覆盖的问题（需要通过颜色值解决）
    ctx.globalCompositeOperation = 'dorken'
    ctx.fillStyle = coloritem
    ctx.strokeStyle = "red"
    ctx.closePath();
    ctx.stroke()
    ctx.fill()
}