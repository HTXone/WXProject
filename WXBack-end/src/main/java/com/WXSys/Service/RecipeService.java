package com.WXSys.Service;

import com.WXSys.entity.Recipe;

import java.util.List;

public interface RecipeService {

    List<Recipe> getRecommendRecipe(int Uid,int Gid,int page);

    List<Recipe> getRecipeByClass(String Class);

}
