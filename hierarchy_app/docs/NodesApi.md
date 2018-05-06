# NodesApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNodes**](NodesApi.md#createNodes) | **POST** /nodes | Create a node
[**listNodes**](NodesApi.md#listNodes) | **GET** /nodes | List all nodes
[**showNodeById**](NodesApi.md#showNodeById) | **GET** /nodes/{nodeId} | Info for a specific node




<a name="createNodes"></a>
# **createNodes**
> createNodes()

Create a node

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.NodesApi;



NodesApi apiInstance = new NodesApi();

try {
    apiInstance.createNodes();
} catch (ApiException e) {
    System.err.println("Exception when calling NodesApi#createNodes");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.


### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


<a name="listNodes"></a>
# **listNodes**
> List listNodes(limit)

List all nodes

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.NodesApi;



NodesApi apiInstance = new NodesApi();

Integer limit = Arrays.asList(56); // Integer | How many items to return at one time (max 100)

try {
    List result = apiInstance.listNodes(limit);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling NodesApi#listNodes");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**| How many items to return at one time (max 100) | [optional]


### Return type

[**List**](List.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jsonapplication/json


<a name="showNodeById"></a>
# **showNodeById**
> List showNodeById(nodeId)

Info for a specific node

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.NodesApi;



NodesApi apiInstance = new NodesApi();

String nodeId = Arrays.asList("nodeId_example"); // String | The id of the node to retrieve

try {
    List result = apiInstance.showNodeById(nodeId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling NodesApi#showNodeById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The id of the node to retrieve |


### Return type

[**List**](List.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/jsonapplication/json



