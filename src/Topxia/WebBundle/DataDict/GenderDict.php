<?php
namespace Topxia\WebBundle\DataDict;

class GenderDict implements DataDictInterface
{
    public function getDict() {
        return array(
            'male' => $this->getServiceKernel()->trans('男'),
            'female' => $this->getServiceKernel()->trans('女'),
        );
    }
    

    public function getRenderedDict() {
        return $this->getDict();
    }

    public function getGroupedDict() {
        return $this->getDict();
    }
}