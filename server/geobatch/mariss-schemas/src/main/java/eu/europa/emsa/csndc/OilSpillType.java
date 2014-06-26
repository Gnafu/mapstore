//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vJAXB 2.1.10 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2014.06.13 at 10:49:44 AM CEST 
//


package eu.europa.emsa.csndc;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import net.opengis.gml.AbstractFeatureType;
import net.opengis.gml.GeometryArrayPropertyType;
import net.opengis.gml.LengthType;
import net.opengis.gml.PointType;
import net.opengis.ows._1.KeywordsType;


/**
 * Oil Spill feature description
 * 
 * <p>Java class for OilSpillType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="OilSpillType">
 *   &lt;complexContent>
 *     &lt;extension base="{http://www.opengis.net/gml}AbstractFeatureType">
 *       &lt;sequence>
 *         &lt;element name="eventid" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="origin" type="{http://www.emsa.europa.eu/csndc}OriginType"/>
 *         &lt;element name="center" type="{http://www.opengis.net/gml}PointType"/>
 *         &lt;element name="geometry" type="{http://www.opengis.net/gml}GeometryArrayPropertyType"/>
 *         &lt;element name="timeStamp" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="dataSource" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="extension" type="{http://www.emsa.europa.eu/csndc}OilSpillExtensionType" minOccurs="0"/>
 *         &lt;element name="locationClassification" type="{http://www.emsa.europa.eu/csndc}LocationClassificationType" minOccurs="0"/>
 *         &lt;element name="distanceFromCoast" type="{http://www.opengis.net/gml}LengthType" minOccurs="0"/>
 *         &lt;element name="keywords" type="{http://www.opengis.net/ows/1.1}KeywordsType" minOccurs="0"/>
 *         &lt;element name="imageIdentifier" type="{http://www.emsa.europa.eu/csndc}ImageType" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="classificationLevel" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="composition" type="{http://www.emsa.europa.eu/csndc}OilSpillCompositionType" minOccurs="0"/>
 *         &lt;element name="auxiliaryDataRef" type="{http://www.emsa.europa.eu/csndc}AuxiliaryDataReferenceArrayType" minOccurs="0"/>
 *         &lt;element name="possibleSources" type="{http://www.emsa.europa.eu/csndc}PossibleSourcesType" minOccurs="0"/>
 *         &lt;element name="analysisSpecific" type="{http://www.emsa.europa.eu/csndc}SlickTechParametersType" minOccurs="0"/>
 *         &lt;element name="inSituInformation" type="{http://www.emsa.europa.eu/csndc}InSituInformationType" minOccurs="0"/>
 *         &lt;element name="meteoConditions" type="{http://www.emsa.europa.eu/csndc}MeteoConditionsType" minOccurs="0"/>
 *         &lt;element name="relatedEvents" type="{http://www.emsa.europa.eu/csndc}RelatedEventsType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "OilSpillType", propOrder = {
    "eventid",
    "origin",
    "center",
    "geometry",
    "timeStamp",
    "dataSource",
    "extension",
    "locationClassification",
    "distanceFromCoast",
    "keywords",
    "imageIdentifier",
    "classificationLevel",
    "composition",
    "auxiliaryDataRef",
    "possibleSources",
    "analysisSpecific",
    "inSituInformation",
    "meteoConditions",
    "relatedEvents"
})
public class OilSpillType
    extends AbstractFeatureType
{

    @XmlElement(required = true)
    protected String eventid;
    @XmlElement(required = true)
    protected OriginType origin;
    @XmlElement(required = true)
    protected PointType center;
    @XmlElement(required = true)
    protected GeometryArrayPropertyType geometry;
    @XmlElement(required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar timeStamp;
    protected String dataSource;
    protected OilSpillExtensionType extension;
    protected LocationClassificationType locationClassification;
    protected LengthType distanceFromCoast;
    protected KeywordsType keywords;
    protected List<ImageType> imageIdentifier;
    protected Double classificationLevel;
    protected OilSpillCompositionType composition;
    protected AuxiliaryDataReferenceArrayType auxiliaryDataRef;
    protected PossibleSourcesType possibleSources;
    protected SlickTechParametersType analysisSpecific;
    protected InSituInformationType inSituInformation;
    protected MeteoConditionsType meteoConditions;
    protected RelatedEventsType relatedEvents;

    /**
     * Gets the value of the eventid property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEventid() {
        return eventid;
    }

    /**
     * Sets the value of the eventid property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEventid(String value) {
        this.eventid = value;
    }

    /**
     * Gets the value of the origin property.
     * 
     * @return
     *     possible object is
     *     {@link OriginType }
     *     
     */
    public OriginType getOrigin() {
        return origin;
    }

    /**
     * Sets the value of the origin property.
     * 
     * @param value
     *     allowed object is
     *     {@link OriginType }
     *     
     */
    public void setOrigin(OriginType value) {
        this.origin = value;
    }

    /**
     * Gets the value of the center property.
     * 
     * @return
     *     possible object is
     *     {@link PointType }
     *     
     */
    public PointType getCenter() {
        return center;
    }

    /**
     * Sets the value of the center property.
     * 
     * @param value
     *     allowed object is
     *     {@link PointType }
     *     
     */
    public void setCenter(PointType value) {
        this.center = value;
    }

    /**
     * Gets the value of the geometry property.
     * 
     * @return
     *     possible object is
     *     {@link GeometryArrayPropertyType }
     *     
     */
    public GeometryArrayPropertyType getGeometry() {
        return geometry;
    }

    /**
     * Sets the value of the geometry property.
     * 
     * @param value
     *     allowed object is
     *     {@link GeometryArrayPropertyType }
     *     
     */
    public void setGeometry(GeometryArrayPropertyType value) {
        this.geometry = value;
    }

    /**
     * Gets the value of the timeStamp property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getTimeStamp() {
        return timeStamp;
    }

    /**
     * Sets the value of the timeStamp property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setTimeStamp(XMLGregorianCalendar value) {
        this.timeStamp = value;
    }

    /**
     * Gets the value of the dataSource property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDataSource() {
        return dataSource;
    }

    /**
     * Sets the value of the dataSource property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDataSource(String value) {
        this.dataSource = value;
    }

    /**
     * Gets the value of the extension property.
     * 
     * @return
     *     possible object is
     *     {@link OilSpillExtensionType }
     *     
     */
    public OilSpillExtensionType getExtension() {
        return extension;
    }

    /**
     * Sets the value of the extension property.
     * 
     * @param value
     *     allowed object is
     *     {@link OilSpillExtensionType }
     *     
     */
    public void setExtension(OilSpillExtensionType value) {
        this.extension = value;
    }

    /**
     * Gets the value of the locationClassification property.
     * 
     * @return
     *     possible object is
     *     {@link LocationClassificationType }
     *     
     */
    public LocationClassificationType getLocationClassification() {
        return locationClassification;
    }

    /**
     * Sets the value of the locationClassification property.
     * 
     * @param value
     *     allowed object is
     *     {@link LocationClassificationType }
     *     
     */
    public void setLocationClassification(LocationClassificationType value) {
        this.locationClassification = value;
    }

    /**
     * Gets the value of the distanceFromCoast property.
     * 
     * @return
     *     possible object is
     *     {@link LengthType }
     *     
     */
    public LengthType getDistanceFromCoast() {
        return distanceFromCoast;
    }

    /**
     * Sets the value of the distanceFromCoast property.
     * 
     * @param value
     *     allowed object is
     *     {@link LengthType }
     *     
     */
    public void setDistanceFromCoast(LengthType value) {
        this.distanceFromCoast = value;
    }

    /**
     * Gets the value of the keywords property.
     * 
     * @return
     *     possible object is
     *     {@link KeywordsType }
     *     
     */
    public KeywordsType getKeywords() {
        return keywords;
    }

    /**
     * Sets the value of the keywords property.
     * 
     * @param value
     *     allowed object is
     *     {@link KeywordsType }
     *     
     */
    public void setKeywords(KeywordsType value) {
        this.keywords = value;
    }

    /**
     * Gets the value of the imageIdentifier property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the imageIdentifier property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getImageIdentifier().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ImageType }
     * 
     * 
     */
    public List<ImageType> getImageIdentifier() {
        if (imageIdentifier == null) {
            imageIdentifier = new ArrayList<ImageType>();
        }
        return this.imageIdentifier;
    }

    /**
     * Gets the value of the classificationLevel property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getClassificationLevel() {
        return classificationLevel;
    }

    /**
     * Sets the value of the classificationLevel property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setClassificationLevel(Double value) {
        this.classificationLevel = value;
    }

    /**
     * Gets the value of the composition property.
     * 
     * @return
     *     possible object is
     *     {@link OilSpillCompositionType }
     *     
     */
    public OilSpillCompositionType getComposition() {
        return composition;
    }

    /**
     * Sets the value of the composition property.
     * 
     * @param value
     *     allowed object is
     *     {@link OilSpillCompositionType }
     *     
     */
    public void setComposition(OilSpillCompositionType value) {
        this.composition = value;
    }

    /**
     * Gets the value of the auxiliaryDataRef property.
     * 
     * @return
     *     possible object is
     *     {@link AuxiliaryDataReferenceArrayType }
     *     
     */
    public AuxiliaryDataReferenceArrayType getAuxiliaryDataRef() {
        return auxiliaryDataRef;
    }

    /**
     * Sets the value of the auxiliaryDataRef property.
     * 
     * @param value
     *     allowed object is
     *     {@link AuxiliaryDataReferenceArrayType }
     *     
     */
    public void setAuxiliaryDataRef(AuxiliaryDataReferenceArrayType value) {
        this.auxiliaryDataRef = value;
    }

    /**
     * Gets the value of the possibleSources property.
     * 
     * @return
     *     possible object is
     *     {@link PossibleSourcesType }
     *     
     */
    public PossibleSourcesType getPossibleSources() {
        return possibleSources;
    }

    /**
     * Sets the value of the possibleSources property.
     * 
     * @param value
     *     allowed object is
     *     {@link PossibleSourcesType }
     *     
     */
    public void setPossibleSources(PossibleSourcesType value) {
        this.possibleSources = value;
    }

    /**
     * Gets the value of the analysisSpecific property.
     * 
     * @return
     *     possible object is
     *     {@link SlickTechParametersType }
     *     
     */
    public SlickTechParametersType getAnalysisSpecific() {
        return analysisSpecific;
    }

    /**
     * Sets the value of the analysisSpecific property.
     * 
     * @param value
     *     allowed object is
     *     {@link SlickTechParametersType }
     *     
     */
    public void setAnalysisSpecific(SlickTechParametersType value) {
        this.analysisSpecific = value;
    }

    /**
     * Gets the value of the inSituInformation property.
     * 
     * @return
     *     possible object is
     *     {@link InSituInformationType }
     *     
     */
    public InSituInformationType getInSituInformation() {
        return inSituInformation;
    }

    /**
     * Sets the value of the inSituInformation property.
     * 
     * @param value
     *     allowed object is
     *     {@link InSituInformationType }
     *     
     */
    public void setInSituInformation(InSituInformationType value) {
        this.inSituInformation = value;
    }

    /**
     * Gets the value of the meteoConditions property.
     * 
     * @return
     *     possible object is
     *     {@link MeteoConditionsType }
     *     
     */
    public MeteoConditionsType getMeteoConditions() {
        return meteoConditions;
    }

    /**
     * Sets the value of the meteoConditions property.
     * 
     * @param value
     *     allowed object is
     *     {@link MeteoConditionsType }
     *     
     */
    public void setMeteoConditions(MeteoConditionsType value) {
        this.meteoConditions = value;
    }

    /**
     * Gets the value of the relatedEvents property.
     * 
     * @return
     *     possible object is
     *     {@link RelatedEventsType }
     *     
     */
    public RelatedEventsType getRelatedEvents() {
        return relatedEvents;
    }

    /**
     * Sets the value of the relatedEvents property.
     * 
     * @param value
     *     allowed object is
     *     {@link RelatedEventsType }
     *     
     */
    public void setRelatedEvents(RelatedEventsType value) {
        this.relatedEvents = value;
    }

}