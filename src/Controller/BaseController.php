<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BaseController extends AbstractController {
    /**
     * @Route("/page1", name="page1")
     */
    public function page1() {
        return $this->render('page1.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }

    /**
     * @Route("/page2", name="page2")
     */
    public function page2() {
        return $this->render('page2.html.twig', [
            'controller_name' => 'BaseController',
        ]);
    }
}
