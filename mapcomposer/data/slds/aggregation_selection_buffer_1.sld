<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Default Line</Name>
    <UserStyle>
      <Title>1 px blue line</Title>
      <Abstract>Default line style, 1 pixel wide blue</Abstract>

      <FeatureTypeStyle>
        <Rule>
          <Title>Basso Rischio</Title>
          <Abstract>Linea per Basso Rischio Incidentale</Abstract>
          <ogc:Filter>
              <ogc:PropertyIsLessThanOrEqualTo>
                   <ogc:PropertyName>calc_formula_tot</ogc:PropertyName>
                   <ogc:Literal>100000</ogc:Literal>
              </ogc:PropertyIsLessThanOrEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>17061</MaxScaleDenominator>
          <PolygonSymbolizer>
            <Geometry>
              <ogc:Function name="buffer">
                <ogc:PropertyName>geometria</ogc:PropertyName>
                <ogc:PropertyName>distanza</ogc:PropertyName>
              </ogc:Function>
            </Geometry>
            <Fill>
              <CssParameter name="fill">#D5F50A</CssParameter>
              <CssParameter name="fill-opacity">0.5</CssParameter>
            </Fill>
          </PolygonSymbolizer>
          <LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <Stroke>
              <CssParameter name="stroke">#14F200</CssParameter>
              <CssParameter name="stroke-width">2</CssParameter>
            </Stroke>
          </LineSymbolizer>
        </Rule>

        <Rule>
          <Title>Medio Rischio</Title>
          <Abstract>Linea per Medio Rischio Incidentale</Abstract>
          <ogc:Filter>
              <ogc:And>
                <ogc:PropertyIsLessThanOrEqualTo>
                   <ogc:PropertyName>calc_formula_tot</ogc:PropertyName>
                   <ogc:Literal>250000</ogc:Literal>
                </ogc:PropertyIsLessThanOrEqualTo>
                <ogc:PropertyIsGreaterThanOrEqualTo>
                   <ogc:PropertyName>calc_formula_tot</ogc:PropertyName>
                   <ogc:Literal>100001</ogc:Literal>
                </ogc:PropertyIsGreaterThanOrEqualTo>
              </ogc:And>
          </ogc:Filter>
          <MaxScaleDenominator>17061</MaxScaleDenominator>
          <PolygonSymbolizer>
            <Geometry>
              <ogc:Function name="buffer">
                <ogc:PropertyName>geometria</ogc:PropertyName>
                <ogc:PropertyName>distanza</ogc:PropertyName>
              </ogc:Function>
            </Geometry>
            <Fill>
              <CssParameter name="fill">#7F7F7F</CssParameter>
              <CssParameter name="fill-opacity">0.3</CssParameter>
            </Fill>
          </PolygonSymbolizer>
          <LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <Stroke>
              <CssParameter name="stroke">#FFFB00</CssParameter>
              <CssParameter name="stroke-width">4</CssParameter>
            </Stroke>
          </LineSymbolizer>
        </Rule>
        
        
        <Rule>
          <Title>Alto Rischio</Title>
          <Abstract>Linea per Alto Rischio Incidentale</Abstract>
          <ogc:Filter>
            <ogc:PropertyIsGreaterThanOrEqualTo>
               <ogc:PropertyName>calc_formula_tot</ogc:PropertyName>
               <ogc:Literal>250001</ogc:Literal>
            </ogc:PropertyIsGreaterThanOrEqualTo>
          </ogc:Filter>
          <MaxScaleDenominator>17061</MaxScaleDenominator>
          <PolygonSymbolizer>
            <Geometry>
              <ogc:Function name="buffer">
                <ogc:PropertyName>geometria</ogc:PropertyName>
                <ogc:PropertyName>distanza</ogc:PropertyName>
              </ogc:Function>
            </Geometry>
            <Fill>
              <CssParameter name="fill">#7F7F7F</CssParameter>
              <CssParameter name="fill-opacity">0.3</CssParameter>
            </Fill>
          </PolygonSymbolizer>
          <LineSymbolizer uom="http://www.opengeospatial.org/se/units/metre">
            <Stroke>
              <CssParameter name="stroke">#FF0000</CssParameter>
              <CssParameter name="stroke-width">6</CssParameter>
            </Stroke>
          </LineSymbolizer>
        </Rule>
        
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>