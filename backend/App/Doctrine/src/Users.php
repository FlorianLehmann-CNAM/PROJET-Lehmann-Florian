<?php

use JsonSerializable;

/**
 * Users
 */
class Users implements JsonSerializable
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string|null
     */
    private $name;

    /**
     * @var string|null
     */
    private $surname;

    /**
     * @var string|null
     */
    private $address;

    /**
     * @var string|null
     */
    private $postalcode;

    /**
     * @var string|null
     */
    private $city;

    /**
     * @var string|null
     */
    private $mobilephone;

    /**
     * @var string|null
     */
    private $mail;

    /**
     * @var string|null
     */
    private $country;

    /**
     * @var string|null
     */
    private $gender;

    /**
     * @var string|null
     */
    private $login;

    /**
     * @var string|null
     */
    private $password;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name.
     *
     * @param string|null $name
     *
     * @return Users
     */
    public function setName($name = null)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set surname.
     *
     * @param string|null $surname
     *
     * @return Users
     */
    public function setSurname($surname = null)
    {
        $this->surname = $surname;

        return $this;
    }

    /**
     * Get surname.
     *
     * @return string|null
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * Set address.
     *
     * @param string|null $address
     *
     * @return Users
     */
    public function setAddress($address = null)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address.
     *
     * @return string|null
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set postalcode.
     *
     * @param string|null $postalcode
     *
     * @return Users
     */
    public function setPostalcode($postalcode = null)
    {
        $this->postalcode = $postalcode;

        return $this;
    }

    /**
     * Get postalcode.
     *
     * @return string|null
     */
    public function getPostalcode()
    {
        return $this->postalcode;
    }

    /**
     * Set city.
     *
     * @param string|null $city
     *
     * @return Users
     */
    public function setCity($city = null)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city.
     *
     * @return string|null
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set mobilephone.
     *
     * @param string|null $mobilephone
     *
     * @return Users
     */
    public function setMobilephone($mobilephone = null)
    {
        $this->mobilephone = $mobilephone;

        return $this;
    }

    /**
     * Get mobilephone.
     *
     * @return string|null
     */
    public function getMobilephone()
    {
        return $this->mobilephone;
    }

    /**
     * Set mail.
     *
     * @param string|null $mail
     *
     * @return Users
     */
    public function setMail($mail = null)
    {
        $this->mail = $mail;

        return $this;
    }

    /**
     * Get mail.
     *
     * @return string|null
     */
    public function getMail()
    {
        return $this->mail;
    }

    /**
     * Set country.
     *
     * @param string|null $country
     *
     * @return Users
     */
    public function setCountry($country = null)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country.
     *
     * @return string|null
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set gender.
     *
     * @param string|null $gender
     *
     * @return Users
     */
    public function setGender($gender = null)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get gender.
     *
     * @return string|null
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set login.
     *
     * @param string|null $login
     *
     * @return Users
     */
    public function setLogin($login = null)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login.
     *
     * @return string|null
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set password.
     *
     * @param string|null $password
     *
     * @return Users
     */
    public function setPassword($password = null)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     *
     * @return string|null
     */
    public function getPassword()
    {
        return $this->password;
    }

    public function jsonSerialize(){
        return [
            "id" => $this->getId(),
            "name" => $this->getName(),
            "surname" => $this->getSurname(),
            "address" => $this->getAddress(),
            "postalCode" => $this->getPostalcode(),
            "city" => $this->getCity(),
            "mobilePhone" => $this->getMobilephone(),
            "mail" => $this->getMail(),
            "country" => $this->getCountry(),
            "gender" => $this->getGender(),
            "login" => $this->getLogin()
        ];
    }
}
