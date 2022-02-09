package com.WXSys.controller;

import com.WXSys.Service.RecipeService;
import com.WXSys.entity.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class RecipeController {

    @Autowired
    RecipeService recipeService;

    @RequestMapping(value = "/recommendofUser.do")
    @ResponseBody
    public List<Recipe> GetUserRecommend(@RequestParam int uid,@RequestParam int page){
        return recipeService.getRecommendRecipe(uid,0,page);
    }

    @RequestMapping(value = "/recommendofClass.do")
    @ResponseBody
    public List<Recipe> GetTheRecipesWithClass(int Uid,int classes){
        if (classes>0){
            return recipeService.getRecipeByClass(String.valueOf(classes));
        }
        else {
            return recipeService.getRecommendRecipe(Uid,0,0);
        }
    }


}
