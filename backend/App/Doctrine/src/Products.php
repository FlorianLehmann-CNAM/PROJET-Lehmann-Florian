<?php

use JsonSerializable;


/**
 * Products
 */
class Products implements JsonSerializable
{
    /**
     * @var int
     */
    private $productId;

    /**
     * @var string
     */
    private $title;

    /**
     * @var string|null
     */
    private $description;

    /**
     * @var string
     */
    private $price;

    /**
     * @var string|null
     */
    private $imgurl;

    /**
     * @var string
     */
    private $manufacturer;

    /**
     * @var string|null
     */
    private $color;

    /**
     * @var int|null
     */
    private $width;

    /**
     * @var int|null
     */
    private $height;

    /**
     * @var int
     */
    private $garantie = '0';


    /**
     * Get productId.
     *
     * @return int
     */
    public function getProductId()
    {
        return $this->productId;
    }

    /**
     * Set title.
     *
     * @param string $title
     *
     * @return Products
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set description.
     *
     * @param string|null $description
     *
     * @return Products
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set price.
     *
     * @param string $price
     *
     * @return Products
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price.
     *
     * @return string
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set imgurl.
     *
     * @param string|null $imgurl
     *
     * @return Products
     */
    public function setImgurl($imgurl = null)
    {
        $this->imgurl = $imgurl;

        return $this;
    }

    /**
     * Get imgurl.
     *
     * @return string|null
     */
    public function getImgurl()
    {
        return $this->imgurl;
    }

    /**
     * Set manufacturer.
     *
     * @param string $manufacturer
     *
     * @return Products
     */
    public function setManufacturer($manufacturer)
    {
        $this->manufacturer = $manufacturer;

        return $this;
    }

    /**
     * Get manufacturer.
     *
     * @return string
     */
    public function getManufacturer()
    {
        return $this->manufacturer;
    }

    /**
     * Set color.
     *
     * @param string|null $color
     *
     * @return Products
     */
    public function setColor($color = null)
    {
        $this->color = $color;

        return $this;
    }

    /**
     * Get color.
     *
     * @return string|null
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * Set width.
     *
     * @param int|null $width
     *
     * @return Products
     */
    public function setWidth($width = null)
    {
        $this->width = $width;

        return $this;
    }

    /**
     * Get width.
     *
     * @return int|null
     */
    public function getWidth()
    {
        return $this->width;
    }

    /**
     * Set height.
     *
     * @param int|null $height
     *
     * @return Products
     */
    public function setHeight($height = null)
    {
        $this->height = $height;

        return $this;
    }

    /**
     * Get height.
     *
     * @return int|null
     */
    public function getHeight()
    {
        return $this->height;
    }

    /**
     * Set garantie.
     *
     * @param int $garantie
     *
     * @return Products
     */
    public function setGarantie($garantie)
    {
        $this->garantie = $garantie;

        return $this;
    }

    /**
     * Get garantie.
     *
     * @return int
     */
    public function getGarantie()
    {
        return $this->garantie;
    }

    public function jsonSerialize(){
        $formatter = new NumberFormatter('en_US', NumberFormatter::CURRENCY);
        $curr = "USD";
        return [
            "id" => $this->getProductId(),
            "title" => $this->getTitle(),
            "description" => $this->getDescription(),
            "price" => $formatter->parseCurrency($this->getPrice(), $curr),
            "imgUrl" => $this->getImgurl(),
            "manufacturer" => $this->getManufacturer(),
            "color" => $this->getColor(),
            "width" => $this->getWidth(),
            "height" => $this->getHeight(),
            "garantie" => $this->getGarantie()
        ];
    }
}
